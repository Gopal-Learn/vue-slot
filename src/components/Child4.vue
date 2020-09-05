<template>
  <div class="child">
    <slot name="header"></slot>
    <slot></slot>
    <div>Hello, I am from Child.</div>
    <slot name="footer"></slot>
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
