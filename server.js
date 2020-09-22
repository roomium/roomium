/**
 * Roomium 
 * 
 * Roomium is a Open source project class room system.
 * 
 * copyright (c) Roomium developers team.
 * 
 */

var app = require('express')();
var http = require('http').createServer(app);

require('./src/node_base_web')(http,app);