var logger = require('./node_logger')

const result = {
    error: false,
    messages: "",
    result : {},
}

/**
 * FieldsHelper
 * 
 * Help to make required fields to client
 * 
 * @param {Array} required 
 * @param {Express.Request} request 
 */
async function FieldsHelper(required,request){
    logger.info(request.body)
}

module.exports.FieldsHelper = FieldsHelper;
module.exports.result = result;