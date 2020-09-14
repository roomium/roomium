var app = require('express')();
var http = require('http').createServer(app);
var logger = require('./src/node_logger');
var helmet = require('helmet');

logger.header();

app.use(helmet());
require('./src/node_base_web')(http,app);