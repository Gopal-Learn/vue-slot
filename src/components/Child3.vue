<template>
  <div class="child">
    <div>Hello, I am from Child.</div>
    <!-- 将user和callMe通过 v-bind 的方式传递 -->
    <slot :user="user" :callMe="callMe"></slot>
    <slot name="other" :user="user" :callMe="callMe"></slot>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      user: {
        name: 'Gopal',
        age: 25
      }
    }
  },
  methods: {
    callMe() {
      console.log('记得关注点赞~');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
