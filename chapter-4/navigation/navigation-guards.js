/*

    Navigation guards provide a way to execute code at some points of the navigation steps.
    They are commonly used for authorization checking to some routes or part of them.

*/

/* GLOBAL GUARDS

    Can be assigned by calling the following methods and passing a function you want it to be called.
    They are going to be called one by one in the order of the registration.

*/

/* beforeEach() : is called as soon as navigation is triggered

    . to
    . from
    . next : calling next() will exectued the following global guard registered. It's possible as well
             to cancel the navigation, redirects....

*/

router.beforeEach((to, from, next) => {
    ...
});

/* beforeResolve() : is called only after any beforeEach() callback */

router.beforeResolve((to, from, next) => {
    ...
});

// afterEach() : is launched after the navigation is resolved

router.afterEach((to, from) => {
    ...
});

/*  PER-ROUTE GUARDS

    For selectively applying to specific routes, but you can't assing multiple callbacks to a hook like you
    can with the global guards

*/


// beforeEnter() : can be set by assigning a function to a property of that name in a route

{
    path: '/settings',
    component: SettingsPage,
    beforeEnter: (to, from, next) => {
        / ...
    }
}

// beforeRouteEnter() : when the route has been confirmed (after any global beforeEach or beforeEnter have run)
// but before the component itself has been created.
// For this reason, you don't have access to this variable but you need to define it in the component

export default {
    name: '....',
    props: [],
    beforeRouteEnter(to, from, next) {
        // if we need to access the component...
        next(component => {
            //....
        })
    }
}

//beforeRouteUpdate() : will be called whenever the route changes but the component doesn't.
export default {
    name: '...',
    props: [],
    beforeRouteUpdate(to, from, next) {

    }
}

//beforeRouteLeave() : will be called on a component just before a route change that will navigate away from it.
// It is an opportunity to do any cleanup you may need.

export default {
    name: '...',
    props: [],
    beforeRouteLeave(to, from, next) {

    }
}