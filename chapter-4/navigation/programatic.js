/*
  Methods for the programatic navigation are availables inside the components as this.$router
*/

/* PUSH()   

    takes an object in the same way than <router-link> and navigates to it. This method preserves 
    the browser history, so you can get back to the previous URL

*/

this.$router.push({
    name: 'post',
    params: {
        postId: 2
    }
});

/* REPLACE()

    The same than push() but replaces the current browser history entry.

*/

this.$router.replace({
    name: 'post',
    params: {
        postId: 2
    }
});


/* GO()

    go method allows you to navigate some stpes forward/backward in the browser history with 
    positive/negative integers

*/

this.$router.go(-1);

