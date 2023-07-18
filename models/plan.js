const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newTaskSchema = new Schema({
        what: {type: String, required: true},
        when: {type: Date, required: true},
        who: {type:String, required: true},
        complete:{type: Boolean},
    }, {
        timestamps: true
    });

const planSchema = new Schema({
    what: {type: String, required: true},
    when: {type: Date, required: true},
    who: {type:String, required: true},
    complete:{type: Boolean},
    newTask: [newTaskSchema],
 }, {
    timestamps: true
});

module.exports = mongoose.model('Plan', planSchema);

