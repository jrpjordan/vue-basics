<template>
    <div class="root">
        <SearchBox @search="onSearch" />
    </div>
</template>

<script>
import SearchBox from './SearchBox.vue';
export default {
    components: {
        SearchBox
    },
    methods: {
        onSearch(terms) {
            //make api calls to search the term
        }
    }
}
</script>