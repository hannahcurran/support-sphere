const express = require('express');
const router = express.Router();
const thoughtsCtrl = require('../controllers/thoughts');
// const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', function (req, res, next) {
  res.render('thoughts');
});

//CREATE new thoughts
router.post('/', thoughtsCtrl.create);

//GET route for /thoughts/show
router.get('/show', thoughtsCtrl.show);

//POST route for /show
router.post('/show', thoughtsCtrl.create)

// //UPDATE a thought
// //Return view (form) to edit a post
// router.get('/:id/edit', thoughtsCtrl.edit);

// //DELETE a thought
// router.delete('/:id', thoughtsCtrl.delete);

// //GET read a specific post
// router.get('/:id', thoughtsCtrl.show);

module.exports = router;