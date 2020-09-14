import Vue from 'vue';
import App from './components/App.vue';

import router from './router';

// disable vue production tips
Vue.config.productionTip = false;


new Vue({
    router,
    ...App,
}).$mount("#app");