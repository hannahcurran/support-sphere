const Thought = require('../models/thought');

module.exports = {
    create,
    thoughts,
    new: newThought,
    show,
    update
}

async function update(req,res){
    console.log(req.user._id);
    try{
        const currentThought = await Thought.findById(req.params.id);
         const reqId = String(req.user._id);
        const currentThoughtUserId = String(currentThought.user);
            if(reqId !== currentThoughtUserId){
            throw new Error();
        }
        await Thought.findByIdAndUpdate(req.params.id, req.body)
                    res.redirect('/thoughts');

    }catch(err){
        console.log(err)
        res.redirect('/thoughts')

    }
}

async function create(req, res) {
   req.body.user = req.user._id;
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
        if (req.isAuthenticated()) {
            const thoughts = await Thought.find({ user: req.user.id }).exec();
            res.render('thoughts', { user: req.user, thoughts }); 
          } else {
            res.redirect('/login'); 
          }
         } catch (err) {``
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