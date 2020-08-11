<template>
  <div>
    <slot :data="data"></slot>
  </div>
</template>

<script>
export default {
  name: 'AjaxLoader',
  props: {
    url: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      data: [],
    }
  },
  created() {
    fetch(this.url)
      .then(res => res.json())
      .then(json => this.data = json);
  }
}
</script>