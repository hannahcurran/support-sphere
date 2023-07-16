const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homeSchema = new Schema(
    { title: String },
    {
        timestamps: true
    });


module.exports = mongoose.model('Home', homeSchema);