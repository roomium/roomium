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