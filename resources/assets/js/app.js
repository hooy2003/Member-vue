// 載入外掛套件
require('./vender');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

// import { sync } from 'vuex-router-sync';
import { routes } from './routes';
// import store from './vuex/store';

// sync(store, router);

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

router.beforeEach( (to, form, next) => {
    const isLogin = localStorage.getItem('token') == 'ImLogin';

    if(isLogin) {
        console.log('412');
        next();
    } else {
        if ( to.path !== '/login' && to.path !== '/signup') {
            console.log('A');
            next('/login');
        }
        else {
            console.log('B');
            next();
        }
    }
});

new Vue({
  el: '#page-wrapper',
  router,
  render: h => h(App)
});