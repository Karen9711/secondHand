<template lang="html">
  <div id="footer">

    <router-link tag='div' to="/indexPage" class="item">
      <Icon type="ios-home-outline" size="40" />
      <p>首页</p>
    </router-link>

    <router-link  tag='div' to="/discover" class="item">
      <Icon type="ios-disc-outline" size="40" />
      <p>发现</p>
    </router-link>

    <router-link tag='div' to="/search" class="item">
      <Icon type="ios-cart-outline" size="40" />
      <p>商品</p>
    </router-link>

    
    <router-link tag='div' to="/mine" class="item">
      <Icon type="ios-person-outline" size="40" />
      <p>我的</p>
    </router-link>



  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
#footer
{
  position: fixed;
  width: 100%;
  height:10%;
  bottom: 0;
  left: 0;
  background-color: #d7eef2;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
#footer .item
{
  text-align: center;
  width: 30%;
}
#footer .item.router-link-active
{
  color:#ffa1ac;
}
</style>
