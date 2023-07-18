const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    date: {type: Date, required: true},
    goingWell: {type: String, required: true},
    worries: {type: String, required: true},
    feeling: {type:Number, required: true},
   }, {
    timestamps: true
});
module.exports = mongoose.model('Thought', thoughtSchema);