const express = require('express');
const router = express.Router();
const planCtrl = require('../controllers/plans');
// const ensureLoggedIn = require('../config/ensureLoggedIn');

 router.get('/', function(req, res, next) {
    res.render('plans', planCtrl.index);
});

// router.get('/new', ensureLoggedIn, planCtrl.new);
router.get('/new', planCtrl.new);



module.exports = router;