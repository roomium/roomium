import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function beforeEach(to,from,next){
    if(to.meta.title){
        document.title = "Roomium - "+to.meta.title;
    }else{
        document.title = "Roomium";
    }
    next()
}

var router = new VueRouter({
    mode: 'history',
    routes: require('./routes')
});

router.beforeEach(beforeEach)


export default router