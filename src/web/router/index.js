import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter({
    mode: 'history',
    routes: require('./routes')
})


export default router