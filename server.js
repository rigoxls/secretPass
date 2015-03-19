var http = require('http'),
    conf = require('./config/conf'),
    mongoose = require('mongoose'),
    expressServer = require('./config/expressServer'),
    env = process.env.NODE_ENV || 'production';


//here mongo connection

var app = new expressServer();
var server = http.createServer(app.expressServer);

//init routes
require('./routes.js')(app);

server.listen(conf.port);