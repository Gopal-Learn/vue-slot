<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="title">
      <h2 class="sub-title" @click="onSlot" :class="{ 'active' : active === 'slot' }">介绍 Slot 基本概念</h2>
      <h2 class="sub-title" @click="onIntro" :class="{ 'active' : active === 'intro' }">场景介绍</h2>
    </div>
    <HelloWorld v-if="active === 'slot'" msg="Welcome to Your Vue.js App"/>
    <Demo v-else></Demo>
  </div>
</template>

<script>
import HelloWorld from './components/Parent.vue';
import Demo from './components/Parent2.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Demo
  },
  data() {
    return {
      active: 'slot'
    }
  },
  methods: {
    onSlot() {
      this.active = 'slot';
    },
    onIntro() {
      this.active = 'intro';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* margin-left: 30px; */
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sub-title {
  cursor: pointer;
  margin-left: 30px;
}
.active {
  color: #42b983;
}
</style>
