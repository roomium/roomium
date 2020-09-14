var router = require('express').Router()
var info = require('../node_base_application').info
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

module.exports = router