const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const planSchema = new Schema({
    task: {type: String, required: true},
    date: {type: Date, required: true},
    person: {type:String, required: true},
    complete:{type: Boolean, default: false},
}, {
    timestamps: true
});

module.exports = mongoose.model('Plan', planSchema);