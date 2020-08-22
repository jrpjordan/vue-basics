<template>
    

</template>

<script>
export default {
    name: 'BlogPost',
    data: () => ({
        title: '',
        content: '',
    }),
    created() {
        const {slug} = this.$route.params;
        fetch(`/api/posts/${slug}`)
            .then(res => res.json())
            .then(post => {
                this.title = post.title;
                this.content = post.content;
            });
    }
}
</script>