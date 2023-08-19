const express = require('express');
const router = express.Router();
const thoughtsCtrl = require('../controllers/thoughts');
// const ensureLoggedIn = require('../config/ensureLoggedIn');


//GET route for thoughts
router.get('/', thoughtsCtrl.thoughts);

//POST new thoughts
router.post('/', thoughtsCtrl.create);

//GET route for /thoughts/show
router.get('/show', thoughtsCtrl.show);

//GET read a specific post
router.get('/show/:id', thoughtsCtrl.show);

//POST route for /show
router.post('/show', thoughtsCtrl.create)

// //UPDATE a thought
router.post('/:id', thoughtsCtrl.update);

module.exports = router;


