var mongoose = require('mongoose');

var sessionSchema = new mongoose.Schema({
    name: String,
    time: String,
    date: String,
    note: String
});

module.exports = mongoose.model('Session', sessionSchema);