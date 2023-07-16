// const Plan = require('../models/plan');


module.exports = {
    new: newTask
  
};

function newTask(req, res){
    res.render('plans/new', {errorMsg: ''});

}