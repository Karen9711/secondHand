<!-- 登陆组件 -->
<template lang="html">
  <div id="login">
    <div class="account">
      <input type="text" name="" value="" placeholder="用户名/手机号/email" v-model="account">
    </div>
    <div class="password">
      <input type="password" name="" value="" placeholder="密码" v-model="password">
    </div>

    <div class="check">
      <input type="text" name="" value="" placeholder="请输入验证码">
      <div class="code">
        验证码
      </div>
    </div>

    <div class="login-btn">
      <button type="button" name="button" @click ="handleLogin">登录</button>
    </div>
    <div class="others">
      <div class="signup-btn">
        <router-link tag="a" to="signup">立即注册</router-link>
      </div>
      <div class="forget-pswd">
        <a href="#">忘记密码</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Login',
  data(){
    return {
      account:'',
      password:'',
      isLogin:false,
    }
  },
  methods:{
    handleLogin(){
      var account = this.account;
      var password = this.password;
      console.log("account",account);
      console.log("password",password);
      this.$router.push('/mine/'+account);
      if(true)//如果判断登录成功
      {//更改默认路由
        this.isLogin = true;//已登录状态
      }
    }
  }
}
</script>

<style lang="css" scoped>
#login
{
  width: 90%;
  margin:0 auto;
  margin-top: 10%;
}
#login div.account
{
  margin-bottom: 10px;
}
#login div.password
{
  margin-bottom: 10px;
}
#login div.check
{
  margin-bottom: 20px;
}
#login div.check
{
  width: 100%;
  display: flex;
  justify-content:space-between;
}
#login div.check input
{
  width: 78%;
}
#login div.check .code
{
  width: 20%;
  background-color: rgb(139, 184, 255);
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
.login-btn button
{
  width: 100%;
  font-size: 16px;
  line-height: 2em;
  border-radius: 5px;
  border:0;
  background-color: #fee9b2;
}
.login-btn button:active
{
  background-color: #fcd365;
}
#login .others
{
  display: flex;
  justify-content: space-between;
}
#login .others div
{
  margin-top: 10px;
  font-size: 14px;
}
</style>
