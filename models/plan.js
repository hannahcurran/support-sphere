const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const commentSchema = new Schema({
//     comment: {type: String, required: true},
//     date: {type: Date, required: true},
// }, {
//     timestamps: true
// });

const planSchema = new Schema({
    what: {type: String, required: true},
    when: {type: Date, required: true},
    who: {type:String, required: true},
    complete:{type: Boolean, default: false},
    // task: [taskSchema],
 }, {
    timestamps: true
});

module.exports = mongoose.model('Plan', planSchema);

