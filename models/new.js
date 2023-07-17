const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// //delete if duplicate
// const newTaskSchema = new Schema({
//         what: {type: String, required: true},
//         when: {type: Date, required: true},
//         who: {type:String, required: true},
//         complete:{type: Boolean, default: false},
//     }, {
//         timestamps: true
//     });

//     module.exports = mongoose.model('NewTask', newTaskSchema);