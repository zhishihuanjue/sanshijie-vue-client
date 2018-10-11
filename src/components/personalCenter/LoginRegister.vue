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
    padding: 5rem 1rem 0px 1rem;
}
.mt-tab-item-myStyle .mint-tab-item-label{
    font-size: 1rem;
    font-weight: bolder;
}
</style>
