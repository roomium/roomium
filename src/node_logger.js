var chalk = require('chalk');
var info = require('./node_base_application').info;
var logger = {
    
    log : (data) => {
        console.log(`[${chalk.cyan('LOG')}] ${data}`);
    },

    url_log : (data)=>{
        console.log(`[${chalk.cyan('URL-LOG')}] ${data}`);
    },

    warning : (data) => {
        console.log(`[${chalk.yellow('WARNING')}] ${data}`);
    },

    error : (data) => {
        console.log(`[${chalk.red('ERROR')}] ${data}`);
    },

    header : (data)=>{
        console.log(`Roomium Server ${chalk.green(info.version+'.'+info.code)}\n`);
    },

    web : (request,response,next) => {
        logger.url_log(`Request URL : ${chalk.yellow(request.protocol+'://'+request.get('host')+request.url)}.`);
        next()
    }
}

module.exports = logger