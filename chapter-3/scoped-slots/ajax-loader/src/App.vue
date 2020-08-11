<template>
  <div id="app">
    <AjaxLoader url="https://jsonplaceholder.typicode.com/user">
      <ul slot-scope="{ data }">
        <li v-for="user in data" :key="user.id">{{ user.name }}</li>
      </ul>
    </AjaxLoader>
  </div>
</template>

<script>
import AjaxLoader from './components/AjaxLoader.vue'
export default {
  name: 'App',
  components: {
    AjaxLoader
  }
};
</script>