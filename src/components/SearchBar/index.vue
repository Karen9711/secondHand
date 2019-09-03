<template lang="html">
  <div id="searchBar">
    <input type="text" name="" v-model="itemName">
    <button type="button" @click="handleSearch"><Icon type="md-search" size="25" /></button>
    <!-- <span><Icon type="md-search" size="30" /></span> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      itemName:''
    }
  },
  methods:{
    handleSearch(){
      var name = this.itemName;
      // this.$router.params.kw = name;
      // console.log(this.$router.searchResult.params.kw);
      this.$router.push({ path: '/search/'+name});
    }
  }
}
</script>

<style lang="css" scoped>
#searchBar
{
  width: 100%;
  height: 8%;
  background-color: #d7eef2;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  text-align: center;
  color:#194769;
  font-size: 20px;
  line-height: 2em;
}
#searchBar input
{
  height:2em;
  margin-top: 5px;
  border-radius: 5px;
  font-size: 16px;
  border:0;
  padding: 2px;
}
#searchBar button
{
  background-color: transparent;
  border:0;
}
</style>
