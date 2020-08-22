import router from "../hello-router/src/router";

export default new router({
    routes: [
        {
            name: 'blog',
            path: '/blog/:slug',
            component: BlogSpot,
        }
    ]
})