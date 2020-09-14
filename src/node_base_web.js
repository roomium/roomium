var logger = require('./node_logger')
var chalk = require('chalk')
var express = require('express')
var path = require('path')
require('dotenv').config()

function rootPath(){
    return path.dirname(require.main.filename||process.mainModule.filename)
}

function NodeBaseWeb(http,app){

    var APP_PORT = process.env.APP_PORT || 8000,
    APP_HOST = process.env.APP_HOST || 'localhost',
    APP_DEBUG = process.env.APP_DEBUG || 'false'

    app.use(express.static('web'))

    if(APP_DEBUG=='true')
    {
        app.use(logger.web)
    }

    app.use('/api',require('../src/router'))
    app.use('*',(req,res)=>{
        res.sendFile(rootPath()+"/src/web/index.html")
    })

    http.listen(APP_PORT,APP_HOST,()=>{
        logger.log(`Launched on : http:${APP_HOST}:${APP_PORT}.`)
        if(APP_DEBUG=='true')
        {
            logger.log(`Debug Mode : ${chalk.green(`True`)}.`)
        }else{
            logger.log(`Debug Mode : ${chalk.red(`False`)}.`)
        }
    })
    
}




module.exports = NodeBaseWeb