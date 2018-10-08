<template>
  <div class="login">
    <span class="title">登录</span>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="验证码" v-model="captcha">
        <img src="../../assets/logo.png" height="45px" width="100px">
    </mt-field>
    <mt-field></mt-field>
    <mt-button type="default" plain size="large">登录</mt-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      phone,password
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    padding: 100px 20px 0px 20px;
}
.login .title{
    width: 100%;
    display: block;
    text-align: center;
    font-size: 20px;
    font-weight: bolder;
    margin-bottom:20px; 
}
</style>
