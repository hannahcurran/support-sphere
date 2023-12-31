const Plan = require('../models/plan');

module.exports = {
    new: newTask,
    create,
    plans,
    delete: deletePlan
}

async function deletePlan(req, res) {
    try {
        await Plan.findByIdAndDelete(req.params.id);
        res.redirect('/plans');
    } catch (err) {
        console.log(err);

    }
}

async function plans(req, res) {
    try {
        if (req.isAuthenticated()) {
            const plans = await Plan.find({ user: req.user.id }).exec();
            res.render('plans/index', { user: req.user, plans }
            );
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        console.log(err);

    }

}

function newTask(req, res) {
    console.log('newTask');
    res.render('plans/new', { errorMsg: '' });

}

async function create(req, res) {
    req.body.user = req.user._id;
    try {
        await Plan.create(req.body);
        res.redirect('plans/');
    } catch (err) {
        res.render('index/new', { errorMsg: err.message });
    }
}