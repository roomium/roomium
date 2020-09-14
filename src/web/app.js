import Vue from 'vue'
import App from './components/App.vue'

// disable vue production tips
Vue.config.productionTip = false


new Vue({
    ...App,
}).$mount("#app")