const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

// Setup MongoDB
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://localhost";

router.get('/', function(req, res, next) {
    res.render('daily', { title: 'Senaste dygnet' });
});

router.get('/summary', function(req, res, next) {

    const datetime = new Date();
    const currentDate = datetime.toISOString().substr(0, 10);

    MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        else {
            const db = client.db('happenings');
            const events = db.collection('events');
            // filter on today's date
            events.find({datetime: {$gte: currentDate}}).project({}).toArray( (err, docs) => {
                if (err) throw err;

                else { console.log(docs);
                    res.send(docs); }
                client.close();
            });
        }
    });
});

module.exports = router;
