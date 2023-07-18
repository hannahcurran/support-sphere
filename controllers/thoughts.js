const Thought = require('../models/thought');

module.exports = {
    create,
    thoughts
}

async function create(req, res) {
    try {
        await Thought.create(req.body);
        res.redirect('/');
    } catch (err) {
        res.render('/', { errorMsg: err.message });
    }
}

async function thoughts(req, res) {
    try{
        const plans = await Thought.find({})
        res.render('thoughts/show', {
            thoughts
        });
    }
    catch(err) {
        console.log(err);

    }
    
}