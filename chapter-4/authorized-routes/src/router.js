import Vue from 'vue';
import Router from 'vue-router';
import AuthAPI from './auth';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Users from './views/Users.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/users/:userId',
            name: 'user',
            component: Users,
            beforeEnter: (to, from, next) => {
                if(AuthAPI.isAuthenticated() === false) {
                    next("/login");
                } else {
                    next();
                }
            }
        }

    ],
});

export default router;