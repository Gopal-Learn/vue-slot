<template>
  <div class="parent">
    <!-- 默认插槽 -->
    <h3>默认插槽</h3>
    <Child>
      <div class="parent-text">Hi, I am from parent.</div>
    </Child>
    <!-- 后备内容 -->
    <h3>后备内容</h3>
    <Child1></Child1>
    <!-- 具名插槽 -->
    <h3>具名插槽</h3>
    <Child2>
      <template v-slot:footer><div>我是底部</div></template>
      <template #header><div>我是头部</div></template>
      <template v-slot:default>
        <div>我是内容</div>
      </template>
    </Child2>
    <!-- 作用域插槽 -->
    <h3>作用域插槽</h3>
    <Child3>
      <!-- 这里是独占作用域 -->
      <template v-slot:default="slotProps">
        <div>我的名字：{{slotProps.user.name}}</div>
        <div>我的年龄：{{slotProps.user.age}}</div>
        <button @click="slotProps.callMe">Clicl Me</button>
      </template>
      <!-- 解构赋值 -->
      <template v-slot:other="{ user, callMe}">
        <div>我的名字：{{user.name}}</div>
        <div>我的年龄：{{user.age}}</div>
        <button @click="callMe">Clicl Me</button>
      </template>
    </Child3>
  </div>
</template>

<script>
import Child from './Child';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

export default {
  components: {
    Child, Child1, Child2, Child3
  },
  name: 'Parent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
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
</style>
