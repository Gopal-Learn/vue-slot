<template>
  <div class="child">
    <slot>当父组件不传值的时候，我就展示，我只是一个后备军</slot>
    <div>Hello, I am from Child.</div>
  </div>
</template>

<script>
export default {
  name: 'Child'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
