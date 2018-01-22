var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var apiIndex = require('./api/routes/index');

var app = express();


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


module.exports = app;