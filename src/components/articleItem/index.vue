<template lang="html">
  <div id="articleItem" @click = "handleToArticle">
    <div class="title">
      <div class="tag">
        <img src="../../assets/icons/最新.png" alt="">
      </div>
      <div class="title-info"><h2>惊天秘密！！</h2></div>
    </div>
    <div class="info">
      XXXXX 发布于2017-09-04 xxxxx人已浏览  XXX人觉得有用
    </div>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore m
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    handleToArticle(){
      this.$router.push('/discover/article/123');
    }
  }
}
</script>

<style lang="css" scoped>
#articleItem
{
  padding: 10px;
  background: #fff;
  margin:10px;
  border-radius: 10px;
}
#articleItem  .title
{
  display: flex;
  justify-content: space-between;
}
#articleItem  .info
{
  color:#bbb;
}
#articleItem .content
{
  position: relative;
  font-size: 14px;
}
#articleItem .title .tag
{
  width: 25px;
}
#articleItem .title .title-info
{
  width: 90%;
}
#articleItem .title .tag img
{
  width: 100%;
}

</style>
