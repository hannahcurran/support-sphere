const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {type: String, required: true},
    date: {type: Date, required: true},
}, {
    timestamps: true
});

const taskSchema = new Schemama({
    task: {type: String, required: true},
    date: {type: Date, required: true},
    person: {type:String, required: true},
    complete:{type: Boolean, default: false},
}, {
    timestamps: true
});

const planSchema = new Schema({
    task: {type: String, required: true},
    date: {type: Date, required: true},
    person: {type:String, required: true},
    complete:{type: Boolean, default: false},
    task: [taskSchema],
    comment: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Plan', planSchema);

