<template lang="html">
  <div id="discover">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>

export default {
}
</script>

<style lang="css" scoped>
#discover
{
  width: 100%;
  height: 100%;
}
.content
{
  width: 100%;
  height:81%;
  overflow: scroll;
  position: absolute;
  top:8%;
  left:0;
}
.content ul
{
  list-style: none;
}
.content li
{
  padding: 10px;
  background: #fff;
  margin:10px;
  border-radius: 10px;
}
.content li .title
{
  display: flex;
  justify-content: space-between;
}
.content li .info
{
  color:#bbb;
}
.content li .content
{
  position: relative;
  font-size: 14px;
}
.content .title .tag
{
  width: 25px;
}
.content .title .title-info
{
  width: 90%;
}
.content .title .tag img
{
  width: 100%;
}

</style>
