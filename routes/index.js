var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'My Support Sphere' });
// });

router.get('/auth/google', passport.authenticate(
  'google', 
  {
    scope:  ['profile', 'email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/home',
    failureRedirect: '/index'
  }
));

router.get('/logout', function(req, res){
  req.logout(function(){
    res.redirect('/index')
  });
});

module.exports = router;
