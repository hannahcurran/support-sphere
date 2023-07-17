const Plan = require('../models/plan');


module.exports = {
    new: newTask,
    create
}

function newTask(req, res) {
    res.render('new', { errorMsg: '' });

}

async function create(req, res) {
    try{
await Plan.create(req.body);
res.redirect('/new');
    }catch(err){
        res.render('new', {errorMsg: err.message});
    }
}