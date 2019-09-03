<template lang="html">
  <div id="mine">
    <Header />
    <div class="content">
      <router-view></router-view>
    </div>
    <router-view name="user" />
    <Footer />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
