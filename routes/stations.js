const express = require('express');
const router = express.Router();
const got = require('got');


async function cacheStations() {
    // https://polisen.se/api/policestations
    //const stations = await got('https://jsonplaceholder.typicode.com/todosz/1').json();
    const stations = await got('https://jsonplaceholder.typicode.com/todos/1z', {responseType: 'json'}).then(response => {
        return response.body;
    }).catch(error => {
        console.log(error);
    });
    return stations;
}

// func savestations
// 

router.get('/', async function(req, res) {
    res.render('stations', { title: 'Nyheter och händelser' });
    const stations = await cacheStations();
    console.log(stations);
});

router.get('/data', function(req, res, next) {
    res.send({'hej': "hej", "hej2": "hh"});
});


module.exports = router;

