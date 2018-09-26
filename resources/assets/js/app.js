// 載入外掛套件
require('./vender');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

// import { sync } from 'vuex-router-sync';
import { routes } from './routes';
import store from './vuex/store';

// sync(store, router);

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

router.beforeEach( (to, form, next) => {
    const loginUserData = JSON.parse(localStorage.getItem('token'));

    // if (!isLogin) {
    // }
    if(loginUserData) {
        // 如在登入狀態下重整，應該把存在localStorage的資料再送給state一次
        // 如串後端，API應該再傳給state
        store.commit({
            type: 'setUserData',
            userData: loginUserData,
        });
        next();
    } else {
        if ( to.path !== '/login' && to.path !== '/signup') {            
            next('/login');
        }
        else {            
            next();
        }
    }
});

new Vue({
  el: '#page-wrapper',
  store,
  router,
  render: h => h(App)
});