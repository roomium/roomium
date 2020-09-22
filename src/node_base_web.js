/**
 * Roomium 
 * 
 * Roomium is a Open source project class room system.
 * 
 * copyright (c) Roomium developers team.
 * 
 */
var logger = require('./node_logger');
var chalk = require('chalk');
var express = require('express');
var path = require('path');
var helmet = require('helmet')
var config = require('../config/app.config')

/**
 * @return { String } root path
 */
function rootPath(){
    return path.dirname(require.main.filename||process.mainModule.filename)
}

/**
 * NodeBaseWeb
 * @param { void } http 
 * @param { void } app 
 */
function NodeBaseWeb(http,app){
    app.use(express.static("web"));
    app.use(helmet())
    if(config.APP_DEBUG)
    {
        app.use(logger.web);
    }
    /** Create API Router */
    app.use('/api',require('../src/router'))
    /** Send HTML File to any route except API. */
    app.use('*',(req,res) => {
        res.sendFile(rootPath()+"/src/web/index.html");
    });
    http.listen(config.APP_PORT,config.APP_HOST,() => {
        logger.log(`Launched on : http://${config.APP_HOST}:${config.APP_PORT}.`);
    });
}

module.exports = NodeBaseWeb