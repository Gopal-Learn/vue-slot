<template>
  <div class="toggle-container">
    <slot :currentState="currentState" :setOn="openState" :setOff="closeState" :toggle="toggle"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentState: this.state
    }
  },
  props: {
    state: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openState() {
      this.currentState = true;
    },
    closeState() {
      this.currentState = false;
    },
    toggle() {
      this.currentState = !this.currentState;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
