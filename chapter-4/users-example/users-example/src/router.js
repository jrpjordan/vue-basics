import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';

const Foo = {template: "<p>Nothing to see here</p>"};

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/help',
            component: Foo,
        },
        {
            name: 'user',
            path: '/users/:userId',
            component: Users,
            beforeEnter: (to, from, next) => {
                console.log("route beforeEnter");
                next();
            },
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log("beforeEach 1 called");
    next();
});

router.beforeEach((to, from, next) => {
    console.log("beforeEach 2 called");
    next();
});

router.beforeResolve((to, from, next) => {
    console.log("beforeResolve called");
});

router afterEach((to, from) => {
    console.log("afterEach called")
});

export default router;