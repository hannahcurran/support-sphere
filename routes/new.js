const express = require('express');
const router = express.Router();
const newCtrl = require('../controllers/new');

router.get('/', function(req, res, next) {
    res.render('new');
});

// router.post('/new', function(req, res){
//     res.redirect('/plan');
// });
// router.post('/new', newCtrl.create);

module.exports = router;