<template lang="html">
  <div id="user">
    <div class="content">
      <div class="self-info">
        <div class="portrait">
          <img src="../../assets/icons/portrait.png" alt="">
        </div>
        <div class="info">
          <div class="name">
            XXXXXXX
          </div>
          <div class="sign">
            这个人很懒，没有留下简介 ^-^
          </div>
        </div>
        <div class="toDetail">
          <Icon type="ios-arrow-forward" />
        </div>
      </div>
      <div class="can-do">
        <ul>
          <li><Icon type="ios-settings-outline" size="25" /> 修改密码</li>
          <li><Icon type="ios-settings-outline" size="25" /> 我卖出的</li>
          <li><Icon type="ios-settings-outline" size="25" /> 我卖出的</li>
          <li><Icon type="ios-settings-outline" size="25" /> 我卖出的</li>
          <li><Icon type="ios-settings-outline" size="25" /> 我卖出的</li>
          <li><Icon type="ios-settings-outline" size="25" /> 我卖出的</li>
        </ul>
      </div>
    </div>
    </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.self-info
{
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.self-info .portrait
{
  width: 15%;
}
.self-info .portrait img
{
  max-width:100%;
}
.self-info .info
{
  width: 70%;
}
.self-info .info .name
{
  font-size: 16px;
  font-weight: 700;
}
.can-do
{
  list-style: none;
  /* padding: 20px; */
  margin-top: 10px;
}
.can-do ul
{
  padding: 0;
  list-style: none;
  margin: 0;
}
.can-do ul li
{
  font-size: 16px;
  margin-bottom: 10px;
  background-color: #fff;
  padding: 5px;
  line-height: 2em;
}
</style>
