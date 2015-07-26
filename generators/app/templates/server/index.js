'use strict';

var config = require('./config.json')[process.env.NODE_ENV || 'development'];
var port = process.env.PORT || config.port;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

console.log('using ' + config.publicFilePath + ' to serve public files');

app.use('/', express.static(path.resolve(__dirname + config.publicFilePath)));

app.get('/', function(request, response) {
    response.sendFile(path.resolve(__dirname + config.publicFilePath + '/index.html'));
});

http.listen(port, function() {
    console.log('listening on *:' + port);
});
