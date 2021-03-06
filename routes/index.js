const express = require('express');
const router = express.Router();
const got = require('got');
const mongodb = require('mongodb');
const common = require('../utils/common');
const CronJob = require('cron').CronJob;

// Setup MongoDB
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://localhost";

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nyheter och händelser', navigatePayload: common.getNavigatePayload(req) });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Nyheter och händelser', navigatePayload: common.getNavigatePayload(req) });
});

function saveEvents() {
  got('https://polisen.se/api/events', {responseType: 'json'}).then(response => {
    MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
      if (err) throw err;
      else {
        const db = client.db('happenings');
        db.collection("events").deleteMany({}).then(r =>
            db.collection("events").insertMany(response.body, function(err, res) {
              if (err) throw err;
              console.log("Events updated");
              client.close();
            })
        );
      }
    })
  }).catch(error => {
    console.log(error);
  });
}

router.get('/data', function(req, res, next) {
  MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    else {
      const db = client.db('happenings');
      const events = db.collection('events');

      events.find({}).project({}).toArray( (err, docs) => {
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


// Load events once every five minutes
// cronTime, onTick, onComplete, start, timezone, context, runOnInit
const job = new CronJob('0 */5 * * * *', saveEvents, null, null, null, null, true);
job.start();
