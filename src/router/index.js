var router = require('express').Router()
var info = require('../node_base_application').info
var cors = require('cors')
var logger = require('../node_logger')
logger.info('CORS-Enabled for REST-API.')
router.use(cors())
router.use('/public',require('./public'));
router.get('/',(req,res)=>{
    res.json({
        error:false,
        message:'',
        result: {
            app_version: info.version,
            api_version: info.api_version
        }
    })
})
router.use('*',(req,res,next)=>{
    res.json({error:true,messages:'Unathorized Access',result:{}})
})

module.exports = router