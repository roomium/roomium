/**
 * 
 */
var result = require('../node_helper').result;
var fields = require('../node_helper').FieldsHelper;
var count= 0;
var Auth = {
    loggin : function (req,res){
        fields(['username','password'],req).then(e=>{

        })

    },

    register : function (req,res){
        result.error = false;
        result.result= count;
        res.json(result)
        count++
    }
}

module.exports = Auth;