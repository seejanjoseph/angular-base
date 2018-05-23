var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://seejan:mLab123@ds121248.mlab.com:21248/mongo-base';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;