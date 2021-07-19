var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('stations', { title: 'Nyheter och händelser' });
});

router.get('/data', function(req, res, next) {
    res.send({'hej': "hej", "hej2": "hh"});
});

module.exports = router;

