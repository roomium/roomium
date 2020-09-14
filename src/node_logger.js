var chalk = require('chalk')
var info = require('./node_base_application').info
var logger = {
    
    log : (data)=>{
        console.log(`[${chalk.cyan('LOG')}] ${data}`);
    },

    warning : (data)=>{
        console.log(`[${chalk.yellow('WARNING')}] ${data}`);
    },

    error : (data)=>{
        console.log(`[${chalk.red('ERROR')}] ${data}`);
    },

    header : (data)=>{
        console.log(`Roomium Server ${chalk.green(info.version+'.'+info.code)}\n`)
    },

    web : (request,response,next)=>{
        logger.log(`Request URL : ${chalk.yellow(request.get('host')+request.url)}.`)
        next()
    }
}

module.exports = logger