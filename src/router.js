import VueRouter from 'vue-router';

import Home from './modules/home';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
    ],
  });

export default router;
