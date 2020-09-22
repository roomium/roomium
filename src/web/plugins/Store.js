/**
 * Roomium 
 * 
 * Roomium is a Open source project class room system.
 * 
 * copyright (c) Roomium developers team.
 * 
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        isAuth: false,
        user_id : {},
    }
})