var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('stations', { title: 'Nyheter och händelser' });
});

module.exports = router;

