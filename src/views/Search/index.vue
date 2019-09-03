<!-- 搜索 -->
<template lang="html">
  <div id="search">
    <SearchBar />
    <div class="">
    </div>
    <router-view />
    <Footer />
    <router-view name="detail" />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import Item from '@/components/Item'
export default {
  components:{
    SearchBar,
    Item
  },
  data(){
    return {
    }
  },
  mounted(){
  }
}
</script>

<style lang="css" scoped>
</style>
