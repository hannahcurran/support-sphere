const express = require('express');
const router = express.Router();
// const planCtrl = require('../controllers/plans');

router.get('/', function(req, res, next) {
    res.render('new');
});

module.exports = router;