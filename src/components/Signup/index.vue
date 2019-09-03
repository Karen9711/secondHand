<!-- 登陆组件 -->
<template lang="html">
  <div id="signup">
    <div class="account">
      <label for="">用户名：</label>
      <input type="text" name="" value="" placeholder="字母或数字" v-model="name">
    </div>

    <div class="password">
      <label for="">密码：</label>
      <input type="password" name="" value="" placeholder="6-15位数字/字母" v-model="password">
    </div>

    <div class="re-password">
      <label for="">确认密码：</label>
      <input type="password" name="" value="" placeholder="确认密码" v-model="rePassword">
    </div>

    <div class="phone">
      <label for="">手机号码：</label>
      <input type="text" name="" value="" placeholder="请输入手机号码" v-model="phone">
    </div>

    <label for="">验证：</label>
    <div class="check">
      <input type="text" name="" value="" placeholder="请输入验证码" v-model="checkNumber">
      <button type="button" name="button">发送验证码</button>
    </div>

    <div class="signup-btn">
      <button type="button" name="button" @click ="handleSignup">注册</button>
    </div>
    <div class="others">
      <div class="signup-btn">
        <router-link tag="a" to="login">已有帐号？登录</router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name:'signup',
  data(){
    return {
      name:'',
      password:'',
      rePassword:'',
      checkNumber:'',
      phone:'',
    }
  },
  methods:{
    handleSignup(){

    }
  }
}
</script>

<style lang="css" scoped>
#signup
{
  width: 90%;
  margin:0 auto;
  margin-top: 10%;
}
#signup div
{
  margin-bottom: 15px;
}
#signup div.check
{
  margin-bottom: 20px;
}
#signup div.check
{
  width: 100%;
  display: flex;
  justify-content:space-between;
}
#signup div.check input
{
  width: 78%;
}
#signup div.check button
{
  width: 20%;
  background-color: rgb(214, 235, 241);
  border: 0;
  border-radius: 5px;
}
#signup div.check button:active
{
  background-color: rgb(0, 152, 249);
}
input
{
  width: 100%;
  height: 2em;
  font-size: 16px;
  border:0;
  padding: 2px;
}
input:focus
{
  box-shadow: 0 0 5px 5px #fee9b2;
  border: 0;
}
.signup-btn button
{
  width: 100%;
  font-size: 16px;
  line-height: 2em;
  border-radius: 5px;
  border:0;
  background-color: #fee9b2;
}
.signup-btn button:active
{
  background-color: #fcd365;
}
#signup .others
{
  display: flex;
  justify-content: space-between;
}
#signup .others div
{
  margin-top: 10px;
  font-size: 14px;
}
</style>
