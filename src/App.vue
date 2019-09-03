<template>
  <div id="app">
    <!-- 首页有四个路由  主要页面  发现页面  我的页面 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped="">
#app
{
  height: 100%;
  width: 100%;
  background-color: #f6f6e9;
}
</style>
