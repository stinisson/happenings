const express = require('express');
const router = express.Router();
const got = require('got');
const mongodb = require('mongodb');
const CronJob = require('cron').CronJob;
const common = require('../utils/common');


// Setup MongoDB
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://localhost";


function updateOpeningHours() {
    MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        else {
            const db = client.db('happenings');
            db.collection("policeStationsOpeningHours").insertOne({'stin': 1});

            const openingHours = db.collection('openingHours');

            openingHours.find().sort({updated: 1}).project({id: 1}).limit(1).toArray( (err, docs) => {
                if (err) throw err;
                else {
                    const oldest_id = docs[0].id;
                    got('https://polisen.se/api/policestations/' + oldest_id, {responseType: 'json'}).then(response => {
                        openingHours.updateOne({id: oldest_id},{$set: {info: response.body, updated: Date.now()}})
                        console.log("Updated opening hours for " + response.body.name)
                    }).catch(error => {
                        console.log(error);
                    });
                }
            });
        }
    })
}

function initiateOpeningHours() {
    MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        else {
            const db = client.db('happenings');
            const stations = db.collection('policeStations');
            stations.find({}).project({"id":1}).toArray((err, docs) => {
                if (err) throw err;
                else {
                    const openingHours = db.collection('openingHours');
                    docs.forEach((entry) => {
                        const query = {id: entry.id}
                        const update = {$setOnInsert: { "id": entry.id, "info": {}, "updated": Date.now() }}
                        const options = {upsert: true}
                        openingHours.updateOne(query, update, options);
                    });
                }
            });
        }
    });
}

function saveStations() {
    got('https://polisen.se/api/policestations', {responseType: 'json'}).then(response => {

        MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
            if (err) throw err;
            else {
                const db = client.db('happenings');
                db.collection("policeStations").deleteMany({}).then(r =>
                    db.collection("policeStations").insertMany(response.body, function(err, res) {
                        if (err) throw err;
                        console.log("1 document inserted (stations)");
                        client.close();
                    })
                );
            }
        })
    }).catch(error => {
        console.log(error);
    });
}

router.get('/', function(req, res) {
    res.render('stations', { title: 'Stations', navigatePayload: common.getNavigatePayload(req) });
    //saveStations();
    //updateOpeningHours();
});

router.post('/', function(req, res, next) {
    res.render('stations', { title: 'Stations', navigatePayload: common.getNavigatePayload(req) });
});

router.get('/all', function(req, res, next) {
    MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        else {
            const db = client.db('happenings');
            const policeStations = db.collection('policeStations');

            policeStations.find({}).project({id: 1, name: 1, Url: 1, location: 1, services: 1}).toArray( (err, docs) => {
                if (err) throw err;
                else {
                    res.send(docs);
                }
                client.close();
            });

        }
    });
});

router.get('/open', function(req, res, next) {
    MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        else {
            const db = client.db('happenings');
            const policeStations = db.collection('policeStations');

            policeStations.find({}).project({id: 1, name: 1, Url: 1, location: 1, services: 1}).toArray( (err, docs) => {
                if (err) throw err;
                else {
                    res.send(docs);
                }
                client.close();
            });

        }
    });
});

module.exports = router;

initiateOpeningHours();

// Update opening hours once every five minutes
// cronTime, onTick, onComplete, start, timezone, context, runOnInit
const job = new CronJob('*/5 * * * *', updateOpeningHours, null, null, null, null, true);
job.start();
