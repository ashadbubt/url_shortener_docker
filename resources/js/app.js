/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('../sass/app.scss')

import Vue from 'vue'

window.Vue = require('vue');

Vue.mixin({

    data: function() {
        return {
            CURRENT_URL: process.env.MIX_BASE_URL,
            CURRENT_API: process.env.MIX_BASE_API
        }

    }

})

// Vue.prototype.$CURRENT_URL = 'http://127.0.0.1:8000/'

// router
import router from './routes.js';
window.router = router;
window.Fire = new Vue();

const app = new Vue({
    el: '#app',
    router,
}).$mount('#app');
