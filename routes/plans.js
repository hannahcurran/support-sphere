const express = require('express');
const router = express.Router();
const plansCtrl = require('../controllers/plans');
// const taskCtrl = require('../controllers/new')
// const ensureLoggedIn = require('../config/ensureLoggedIn');

// const Task = require('../models/new');

//  router.get('/', function(req, res, next) {
//     res.render('plans');
// });

//GET route for /plans/new
router.get('/new', plansCtrl.new);

//POST route for /plans
router.post('/', plansCtrl.create)

//handle form submission
// router.post('/newTask, taskCtrl.create');

//render the plan page
// router.get('/plan', plansCtrl.renderPlan);

//POST / plans
// router.post('/', plansCtrl.create )

module.exports = router;