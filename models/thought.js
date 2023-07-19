const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    date: {type: Date},
    goingWell: {type: String},
    worries: {type: String},
    feeling: {type:String},
    updates: {type: String},
    user:{type: Schema.Types.ObjectId, ref:'User'}
   }, {
    timestamps: true
});
module.exports = mongoose.model('Thought', thoughtSchema);