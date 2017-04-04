import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router';

Vue.use(VueRouter);

function start() {
  new Vue({
      router: router,
      template: '<router-view></router-view>',
    }).$mount('#app');
}

document.addEventListener('DOMContentLoaded', start, false);
