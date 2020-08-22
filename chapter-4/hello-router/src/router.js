import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HelloWorld from './components/HelloWorld.vue'

Vue.use(Router);

// https://router.vuejs.org/api/#routes to view the possible parameters...

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/hello-world",
            name: "hello world",
            component: HelloWorld,
        }
    ]
});