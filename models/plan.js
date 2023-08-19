const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newTaskSchema = new Schema({
        what: {type: String, required: true},
        when: {type: Date, required: true},
        who: {type:String, required: true},
        complete:{type: Boolean},
        user:{type: Schema.Types.ObjectId, ref:'User'}
    }, {
        timestamps: true
    });

const planSchema = new Schema({
    what: {type: String, required: true},
    when: {type: Date, required: true},
    who: {type:String, required: true},
    complete:{type: Boolean},
    newTask: [newTaskSchema],
    user:{type: Schema.Types.ObjectId, ref:'User'}
 }, {
    timestamps: true
});

module.exports = mongoose.model('Plan', planSchema);

