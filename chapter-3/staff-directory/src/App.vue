<template>
  <div id="app">
    <h1 class="ui center aligned header">Staff Directory</h1>
    <StaffDirectory />
  </div>
</template>

<script>
import StaffDirectory from './components/StaffDirectory.vue';
import 'semantic-ui-css/semantic.css';
export default {
  name: 'app',
  components: {
    StaffDirectory
  }
}
</script>