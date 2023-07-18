const express = require('express');
const router = express.Router();
const plansCtrl = require('../controllers/plans');
// const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET route for /plans/new
router.get('/new', plansCtrl.new);

//POST route for /plans
router.post('/', plansCtrl.create)

//get route for plans
router.get('/', plansCtrl.plans);

//DELETE /plans/:id
router.delete('/:id', plansCtrl.delete); 

module.exports = router;