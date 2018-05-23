var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let songSchema = mongoose.Schema({
    decade: String,
    artist: String,
    song: String,
    weeksAtOne: Number
});

module.exports = mongoose.model('song', songSchema);