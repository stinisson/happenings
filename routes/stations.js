const express = require('express');
const router = express.Router();
const got = require('got');
const mongodb = require('mongodb');
const CronJob = require('cron').CronJob;

// Load stations once per day
// cronTime, onTick, onComplete, start, timezone, context, runOnInit
const job = new CronJob('0 0 0 * * *', saveStations, null, true, null, null, true);

// Setup MongoDB
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://localhost";

function saveStations() {
    got('https://polisen.se/api/policestations', {responseType: 'json'}).then(response => {
        MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
            if (err) throw err;
            else {
                const db = client.db('happenings');
                db.collection("policeStations").insertMany(response, function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");
                    client.close();
                });
            }
        })
    }).catch(error => {
        console.log(error);
    });
}


router.get('/', function(req, res) {
    res.render('stations', { title: 'Nyheter och händelser' });
});

router.get('/data', function(req, res, next) {
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

