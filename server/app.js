var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var apiIndex = require('./api/routes/index');
var db = require('./db');
var app = express();


//Set up default mongoose connection
/*var mongoDB = 'mongodb://seejan:mLab123@ds121248.mlab.com:21248/mongo-base';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function callback() {
    // Create song schema
    let songSchema = mongoose.Schema({
        decade: String,
        artist: String,
        song: String,
        weeksAtOne: Number
    });

    // Store song documents in a collection called "songs"
    let Song = mongoose.model('songs', songSchema);

    // Create seed data
    let seventies = new Song({
        decade: '1970s',
        artist: 'Debby Boone',
        song: 'You Light Up My Life',
        weeksAtOne: 10
    });

    let eighties = new Song({
        decade: '1980s',
        artist: 'Olivia Newton-John',
        song: 'Physical',
        weeksAtOne: 10
    });

    let nineties = new Song({
        decade: '1990s',
        artist: 'Mariah Carey',
        song: 'One Sweet Day',
        weeksAtOne: 16
    });


    let list = [seventies, eighties, nineties]

    Song.insertMany(list).then(() => {

       

        return Song.update({ song: 'One Sweet Day' }, { $set: { artist: 'Mariah Carey ft. Boyz II Men' } })

    }).then(() => {

       
        return Song.find({ weeksAtOne: { $gte: 10 } }).sort({ decade: 1 })

    }).then(docs => {

        docs.forEach(doc => {
            console.log(
                'In the ' + doc['decade'] + ', ' + doc['song'] + ' by ' + doc['artist'] +
                ' topped the charts for ' + doc['weeksAtOne'] + ' straight weeks.'
            );
        });

    }).then(() => {

        // Since this is an example, we'll clean up after ourselves.
      //  return mongoose.connection.db.collection('songs').drop()

    }).then(() => {

        // Only close the connection when your app is terminating
        return mongoose.connection.close()

    }).catch(err => {

        // Log any errors that are thrown in the Promise chain
        console.log(err)

    })
});*/









// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.set('superSecret', 'here-is-my-super-secret-key');
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiIndex);


/// error handlers

// development error handler
// will print stacktrace
/*if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}*/

// production error handler
// no stacktraces leaked to user
/*app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});*/
app.listen(3000);
console.log('App listening on port 3000');
module.exports = app;