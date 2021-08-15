const express = require('express');
const router = express.Router();
const got = require('got');
const mongodb = require('mongodb');
const CronJob = require('cron').CronJob;
const common = require('../utils/common');

var { LocalDateTime, ZoneId, ZonedDateTime, DateTimeFormatter } = require('@js-joda/core');
require('@js-joda/timezone');


// Setup MongoDB
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://localhost";


function updateOpeningHours() {
    MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        else {
            const db = client.db('happenings');
            const openingHours = db.collection('openingHours');

            openingHours.find().sort({updated: 1}).project({id: 1}).limit(1).toArray( (err, docs) => {
                if (err) throw err;
                else {
                    if (docs.length > 0) {
                        const oldest_id = docs[0].id;
                        got('https://polisen.se/api/policestations/' + oldest_id, {responseType: 'json'}).then(response => {
                            openingHours.updateOne({id: oldest_id},{$set: {info: response.body, updated: Date.now()}})
                            console.log("Updated opening hours for " + response.body.name)
                        }).catch(error => {
                            console.log(error);
                        });
                    }
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

function parsePoliceDate(dateString) {
    if (dateString[12] == ':') {
        // Sometimes the hour is missing a leading zero, insert it
        dateString = dateString.substr(0, 11) + "0" + dateString.substr(11, 7)
    } else {
        dateString = dateString.substr(0, 19);
    }
    dateString = dateString.replace(' ', 'T')

    let zdt = ZonedDateTime.of(
      LocalDateTime.parse(dateString),
      ZoneId.of("Europe/Stockholm")
    );

    dateString = zdt.format(DateTimeFormatter.ofPattern('yyyy-MM-dd')) + "T"
    dateString += zdt.format(DateTimeFormatter.ofPattern('HH:mm:ss'))
    dateString += zdt.format(DateTimeFormatter.ofPattern('Z'))

    return new Date(dateString)
}

function getOpenStationIds(db) {
    return new Promise(function (resolve, reject) {
        const openingHours = db.collection('openingHours');
        const openStationIds = [];
        const currentDate = new Date();
        openingHours.find().toArray((err, docs) => {
            if (err) {
                reject(err);
            }
            else {
                docs.forEach(station => {
                    let isOpen = false;
                    if (station.info.id === undefined) {
                        return;
                    }
                    station.info.services.forEach(service => {
                        if (service.name == 'Anmälan') {
                            service.openingHours.forEach(day => {
                                if (day.name == 'Idag' && day.isClosed == false) {
                                    const openFrom = parsePoliceDate(day.from);
                                    const openTo = parsePoliceDate(day.to);
                                    if (currentDate >= openFrom && currentDate <= openTo) {
                                        openStationIds.push(station.id)
                                    }
                                }
                            })
                        }
                    })
                });
                resolve(openStationIds);
            }
        });
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

            getOpenStationIds(db).then(function(openStationIds) {
                const policeStations = db.collection('policeStations');
                policeStations.find({"id": { $in : openStationIds }}).project({id: 1, name: 1, Url: 1, location: 1, services: 1}).toArray( (err, docs) => {
                    if (err) throw err;
                    else {
                        res.send(docs);
                    }
                });

            }, function(err) {
                throw err;
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
