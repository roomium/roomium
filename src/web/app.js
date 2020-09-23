import Vue from 'vue';
import App from './pages/App.vue';

import router from './router';

// disable vue production tips
Vue.config.productionTip = false;

/** Import Components */
import './components/index'

new Vue({
    router: router,
    ...App,
}).$mount("#app");
