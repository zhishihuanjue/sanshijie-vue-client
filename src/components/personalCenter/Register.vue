<template>
  <div class="register">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="再输入一次" placeholder="请输入密码" type="password" v-model="password_two"></mt-field>
    <mt-field label="验证码" placeholder="请输入验证码" v-model="captcha">
        <mt-button type="default" class="mySmallButton" @click="getCaptcha" v-if="!captchaStatus">获取验证码</mt-button>
        <mt-button type="default" class="mySmallButton" :disabled="captchaStatus" v-else>重新获取({{time}}s)</mt-button>
    </mt-field>
    <mt-button type="default" plain size="large" @click.stop.prevent="register">注册</mt-button>
    <div class="other">
      点击“注册”即表示您同意
      <a @click.stop.prevent="agreement">《三视界使用协议》</a>
    </div>
  </div>
</template>

<script>
import { MessageBox,Toast } from 'mint-ui'
export default {
  name: 'Register',
  data () {
    return {
      phone:null,
      password:null,
      password_two:null,
      captcha:null,
      rememberMe:false,
      captchaStatus:false,
      time:60,
      phoneState:"none"
    }
  },
  methods:{
    agreement(){
        MessageBox('三视界使用协议', `三视界网（以下简称“三视界”）根据以下服务条款为您提供服务`);
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
    },
    checkPhone(){
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
      return reg.test(this.phone)
    },
    register(){
      if( !this.checkPhone() ){
        //手机号码不正确
        this.phoneState = "error"
        Toast({
          message: '手机号码不正确',
          duration: 2000
        });
      } else if(this.password !== this.password_two){
        //两次密码不匹配
        Toast({
          message: '两次密码不相同',
          duration: 2000
        });
      } else if(false){
        //手机验证码不正确
        Toast({
          message: '手机验证码不正确',
          duration: 2000
        });
      } else {
        //执行注册
        this.submitForm()
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/api/users/register", this.registerUser)
            .then(res => {
              // 注册成功
               Toast({
                message: '注册成功',
                duration: 2000
              });
              // this.$router.push("/login");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  margin-top: .3rem;
}
.register .mySmallButton{
  font-size: .6rem /* 12/20 */;
  padding: .15rem /* 3/20 */;
  height: 1.2rem /* 24/20 */;
}
.register .other{
  padding: .6rem /* 12/20 */ 0 0 0;
  font-size: .6rem /* 12/20 */;
}
.register .other a{
  color: #000;
  border-bottom: 1px solid #000;
}
</style>
