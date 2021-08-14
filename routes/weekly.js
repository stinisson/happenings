const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const moment = require('moment');
const common = require('../utils/common');


// Setup MongoDB
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://localhost";

router.get('/', function(req, res, next) {
  res.render('weekly', { title: 'Senaste veckan', navigatePayload: common.getNavigatePayload(req) });
});

router.post('/', function(req, res, next) {
  res.render('weekly', { title: 'Senaste veckan', navigatePayload: common.getNavigatePayload(req) });
});

router.get('/summary', function(req, res, next) {

  // filter out events of the last 7 days
  const lastWeek = moment().subtract(7, 'days').format().substr(0, 10);

  MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    else {
      const db = client.db('happenings');
      const events = db.collection('events');

      events.find({datetime: {$gte: lastWeek}}).project({}).toArray((err, docs) => {
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
