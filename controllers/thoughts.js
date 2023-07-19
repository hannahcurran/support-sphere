const Thought = require('../models/thought');

module.exports = {
    create,
    thoughts,
    new: newThought,
    show,
    update
}

async function update(req,res){
    try{
        await Thought.update(req.body);
        res.redirect('/thoughts');

    }catch(err){
        console.log(err)
        res.redirect('/thoughts')

    }
}

async function create(req, res) {
    try {
        await Thought.create(req.body);
        res.redirect('/thoughts');
    } catch (err) {
        console.log(err)
        res.redirect('/thoughts');
    }
}

function newThought(req, res) {
    console.log('newThought');
    res.render('thoughts', { errorMsg: '' });

}


async function thoughts(req, res) {
    try {
        const thoughts = await Thought.find({})
        console.log(thoughts);

        res.render('thoughts', {
            thoughts
        });
    }
    catch (err) {
        console.log(err);

    }
}

async function show(req, res) {
    try {
        const thought = await Thought.findById(req.params.id);
        res.render('thoughts/show', { thought });
    } catch (err) {
        console.log(err);
        res.redirect('/thoughts');
    }
}