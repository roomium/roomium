/**
 * Roomium 
 * 
 * Roomium is a Open source project class room system.
 * 
 * copyright (c) Roomium developers team.
 * 
 */
require('dotenv').config();
module.exports = {
    APP_HOST : process.env.APP_HOST || 'localhost',
    APP_PORT : process.env.APP_PORT || 8080,
    APP_DEBUG : process.env.APP_DEBUG || 1,
}