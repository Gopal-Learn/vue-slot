<template>
  <div class="parent">
    <!-- 第一种样式 -->
    <h3>第一种样式</h3>
    <Toggle1 :state="state" class="toggle-container-two">
      <template v-slot:default="{currentState, setOn, setOff, toggle }">
        <button @click="toggle">切换</button>
        <button @click="setOff">关闭</button>
        <button @click="setOn">打开</button>
        <div v-if="currentState">我是打开的内容</div>
        <div v-else>我是关闭的内容</div>
      </template>
    </Toggle1>
    <!-- 第二种样式 -->
    <h3>第二种样式</h3>
    <Toggle1 :state="state" class="toggle-container-one">
      <template v-slot:default="{currentState, setOn, setOff, toggle }">
        <button @click="toggle">切换</button>
        <button @click="setOff">关闭</button>
        <button @click="setOn">打开</button>
        <div class="content" v-if="currentState">我是打开的内容</div>
        <div class="content" v-else>我是关闭的内容</div>
      </template>
    </Toggle1>
    <!-- 无渲染函数 -->
    <h3>无渲染函数</h3>
    <toggle :state="state" class="toggle-container-one">
      <template v-slot:default="{currentState, setOn, setOff, toggle }">
        <div>
        <button @click="toggle">切换</button>
        <button @click="setOff">关闭</button>
        <button @click="setOn">打开</button>
        <div class="content" v-if="currentState">我是打开的内容</div>
        <div class="content" v-else>我是关闭的内容</div>
        </div>
      </template>
    </toggle>
  </div>
</template>

<script>
import Toggle1 from './Toggle.vue';
import {toggle} from './Toggle.js';

export default {
  components: {
    Toggle1,
    toggle
  },
  name: 'Parent',
  props: {
    msg: String
  },
  data() {
    return {
      state: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 10px 10px;
}
.toggle-container-one {
  background: #42b983;
}
.toggle-container-one button {
  font-family: 'Source Sans Pro', sans-serif;
  appearance: none;
  outline: 0;
  border: 0;
  padding: 10px 15px;
  background: #fff;
  color: #53e3a6;
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
}
.toggle-container-one button:hover{
  background-color: rgb(245, 247, 249);
}
</style>
