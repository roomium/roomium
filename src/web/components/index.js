import Vue from 'vue';
import NavBarDash from './NavBarDash.vue';
import NavBarFront from './NavBarFront.vue';

[
    NavBarDash,
    NavBarFront,
].forEach(c=>{
    Vue.component(c.name,c)
})