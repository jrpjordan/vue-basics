// Changing the current rout can be done by link or programatically

// 1. Link

<router-link to="/hello-world">Hello, World</router-link>

//Or using parameters

<router-link :to="{path: 'hello-world'}">Hello, World</router-link>

//Route parameters URL = /post/2

<router-link :to="{
    name: 'posts',
    params: {
        postId: 2
    }
}">
    Hello, World!
</router-link>

//Query params URL = /posts?sortBy=date

<router-link :to="{
    name: 'posts',
    query: {
        sortBy: 'date'
    }
}">
    Hello, World!
</router-link>