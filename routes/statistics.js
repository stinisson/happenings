const express = require('express');
const common = require('../utils/common');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('statistics', { title: 'Kriminalstatistik', navigatePayload: common.getNavigatePayload(req) });
});

router.post('/', function(req, res) {
    res.render('statistics', { title: 'Kriminalstatistik', navigatePayload: common.getNavigatePayload(req) });
});

module.exports = router;
