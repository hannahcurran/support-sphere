// const newTask = require('../models/new');

module.exports = {
    //  create,
     new: newTask
};

//delete if duplicated
function newTask(req, res){
    res.render('new', {title: 'Add To Plan'});
}

//create new task with submitted data
// async function create(req, res){
//     const newTask = new Task({
//         what: req.body.what,
//             when: req.body.when,
//             who:req.body.who
//     });
//     try{
//         await newTask.save();
//         res.redirect('/plan');

//     } catch (err){
//         console.log(err);
//     }
// }

