const express = require('express');
const router = express.Router();
const thoughtsCtrl = require('../controllers/thoughts');
// const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', function (req, res, next) {
  res.render('thoughts');
});



module.exports = router;