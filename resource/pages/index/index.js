import Vue from 'vue'
import App from './app'
import Router from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'assets/axios'
import { routes } from './router'

// use router vuex axios
Vue.use(Router)
Vue.use(VueAxios, axios)

// init router and vuex
const router = new Router({
    routes
})
Vue.config.debug = true

// init vue
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
})
