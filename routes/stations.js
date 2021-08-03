const express = require('express');
const router = express.Router();
const got = require('got');
const mongodb = require('mongodb');
const CronJob = require('cron').CronJob;

// Load stations once per day
// cronTime, onTick, onComplete, start, timezone, context, runOnInit
const job = new CronJob('0 0 0 * * *', saveStations, null, null, null, null, true);
job.start();

// Setup MongoDB
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://localhost";


function saveStations() {
    got('https://polisen.se/api/policestations', {responseType: 'json'}).then(response => {

        console.log(response.body);
        MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
            if (err) throw err;
            else {
                const db = client.db('happenings');
                db.collection("policeStations").deleteMany({}).then(r =>
                    db.collection("policeStations").insertMany(response.body, function(err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");
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
    res.render('stations', { title: 'Stations' });
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

