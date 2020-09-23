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
var helmet = require('helmet');
var config = require('../config/app.config');
const { log } = require('console');

/**
 * @return { String } root path
 */
function rootPath(){
    return path.dirname(require.main.filename||process.mainModule.filename);
}

function setSecurityMiddleWare(app){
    app.use(helmet());
}

/**
 * NodeBaseWeb
 * @param { void } http 
 * @param { void } app 
 */
function NodeBaseWeb(http,app){
    logger.header()
    app.use(express.static("web"));
    logger.warning('Activating Security')
    setSecurityMiddleWare(app)
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    if(config.APP_DEBUG)
    {
        logger.info('Activate logger')
        app.use(logger.web);
        app.set('json spaces',2)
    }
    /** Create API Router */
    app.use('/api',require('../src/router'));
    /** Send HTML File to any route except API. */
    app.use('*',(req,res) => {
        res.sendFile(rootPath()+"/src/web/index.html");
    });
    http.listen(config.APP_PORT,config.APP_HOST,() => {
        logger.info(`express server running at http://${config.APP_HOST}:${config.APP_PORT}.`);
    });
}

module.exports = NodeBaseWeb;