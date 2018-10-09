<template>
  <div class="loginRegister">
    <mt-navbar v-model="selected">
        <mt-tab-item id="1" class="mt-tab-item-myStyle">登录</mt-tab-item>
        <mt-tab-item id="2" class="mt-tab-item-myStyle">注册</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
        <app-login></app-login>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
        <app-register></app-register>
    </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Login from "./Login"
import Register from "./Register"
export default {
  name: 'LoginRegister',
  data () {
    return {
        selected:"1"
    }
  },
  components:{
      "app-login":Login,
      "app-register":Register
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.loginRegister{
    padding: 100px 40px 0px 40px;
}
.mt-tab-item-myStyle .mint-tab-item-label{
    font-size: 20px;
    font-weight: bolder;
}
</style>
