/**
 * Roomium 
 * 
 * Roomium is a Open source project class room system.
 * 
 * copyright (c) Roomium developers team.
 * 
 */
var routes = [
    {
        path: '/login',
        name: 'login',
        component: require('../components/auth/Login.vue').default,
        meta: {
            title: 'Sig In'
        }
    }
]


module.exports = routes