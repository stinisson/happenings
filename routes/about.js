const express = require('express');
const common = require('../utils/common');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('about', { title: 'Om', navigatePayload: common.getNavigatePayload(req) });
});

router.post('/', function(req, res, next) {
    res.render('about', { title: 'Om', navigatePayload: common.getNavigatePayload(req) });
});

module.exports = router;
