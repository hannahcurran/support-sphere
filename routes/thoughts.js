const express = require('express');
const router = express.Router();
const thoughtsCtrl = require('../controllers/thoughts');


  router.get('/', function(req, res, next) {
    res.render('thoughts');
});




module.exports = router;