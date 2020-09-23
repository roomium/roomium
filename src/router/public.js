var router = require('express').Router()
const Auth = require('../controller/Auth')
/** Authentication */
router.post('/auth/login',Auth.loggin);
router.post('/auth/register',Auth.register);


module.exports = router;