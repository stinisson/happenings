const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const common = require('../utils/common');

// Setup MongoDB
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://localhost";

router.get('/', function(req, res, next) {
    res.render('daily', { title: 'Senaste dygnet', navigatePayload: common.getNavigatePayload(req) });
});

router.post('/', function(req, res, next) {
    res.render('daily', { title: 'Senaste dygnet', navigatePayload: common.getNavigatePayload(req) });
});

router.get('/summary', function(req, res, next) {

    const datetime = new Date();
    const currentDate = datetime.toISOString().substr(0, 10);
    const swedish_months = {"01": "januari", "02": "februari", "03": "mars", "04": "april", "05": "maj", "06": "juni", "07": "juli", "08": "augusti", "09": "september", "10": "oktober", "11": "november", "12": "december"};
    const event_date_string = currentDate.substr(8, 2) + " " + swedish_months[currentDate.substr(5, 2)].substr(0, 3);

    MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        else {
            const db = client.db('happenings');
            const events = db.collection('events');
            // filter out events having last day
            events.find({name: {$regex: event_date_string}}).project({}).toArray( (err, docs) => {
                if (err) throw err;
                else { res.send(docs); }
                client.close();
            });
        }
    });
});

module.exports = router;
