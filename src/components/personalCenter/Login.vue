<template>
  <div class="login">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"  v-if="loginMode=='password'"></mt-field>
    <mt-field label="验证码" placeholder="请输入验证码" v-model="captcha" v-else>
        <mt-button type="default" class="mySmallButton" @click="getCaptcha" v-if="!captchaStatus">获取验证码</mt-button>
        <mt-button type="default" class="mySmallButton" :disabled="captchaStatus" v-else>重新获取({{time}}s)</mt-button>
    </mt-field>
    <mt-button type="default" plain size="large">登录</mt-button>
    <div class="other">
      <input type="checkbox" v-model="rememberMe"/>记住我 | 
      <a @click.prevent="changeLoginMode('message')" v-if="loginMode=='password'">短信验证码登录</a>
      <a @click.prevent="changeLoginMode('password')" v-else>账号密码登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      phone:null,
      password:null,
      captcha:null,
      rememberMe:false,
      loginMode:"password",
      captchaStatus:false,
      time:60
    }
  },
  methods:{
    changeLoginMode(value){
      this.loginMode = value;
    },
    getCaptcha(){
      this.captchaStatus = true;
      var timer = setInterval(()=>{
        this.time--;
        if(this.time === 0){
          this.time = 60;
          this.captchaStatus = false;
          clearInterval(timer);
        }
      },1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  margin-top: .3rem;
}
.login .mySmallButton{
  font-size: .6rem /* 12/20 */;
  padding: .1rem /* 2/20 */;
  height: 1.2rem /* 24/20 */;
}
.login .other{
  padding: .5rem /* 10/20 */ 0 0 0;
  font-size: .6rem /* 12/20 */;
}
.login .other a{
  color: #000;
}
</style>
