const Plan = require('../models/plan');

module.exports = {
    new: newTask,
    create,
    plans
}

async function plans(req, res) {
    try{
        const plans = await Plan.find({})
        res.render('plans/index', {
            plans
        });
    }
    catch(err) {
        console.log(err);

    }
    
}

function newTask(req, res) {
    console.log('newTask');
    res.render('plans/new', { errorMsg: '' });
    

}

async function create(req, res) {
    try {
        await Plan.create(req.body);
        res.redirect('plans/');
    } catch (err) {
        res.render('index/new', { errorMsg: err.message });
    }
}