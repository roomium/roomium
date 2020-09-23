var chalk = require('chalk');
var info = require('./node_base_application').info;

function datetime(){
    var date = new Date();
    var now = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
    return now;
}

var logger = {
    
    log : (data) => {
        console.log(`${datetime()} ${chalk.cyan('LOG')} ${data}`);
    },

    info : (data) => {
        console.log(`${datetime()} ${chalk.greenBright('INFO')} ${data}`);
    },

    url_log : (data)=>{
        logger.log(` ${data}`);
    },

    warning : (data) => {
        console.log(`${datetime()} ${chalk.yellow('WARNING')} ${data}`);
    },

    error : (data) => {
        console.log(`${datetime()} ${chalk.red('ERROR')} ${data}`);
    },

    header : (data)=>{
        logger.info(`Roomium Server ${chalk.green(info.version+'.'+info.code)}`);
    },

    web : (request,response,next) => {
        logger.url_log(`"${request.method}" ${chalk.yellow(request.protocol+'://'+request.get('host')+request.url)}.`);
        next();
    }
}

module.exports = logger