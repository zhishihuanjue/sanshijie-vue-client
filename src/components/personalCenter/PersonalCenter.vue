<template>
  <div class="personalCenter">
      <!-- <app-back></app-back> -->
      <div class="header">
        <div class="userType">
          {{userTypeName}}
        </div>
        <div class="logo"></div>
        <!-- <a class="tel">18213917293</a> -->
        <a @click.stop.prevent="showDetail('loginRegisterView')">点击登录</a>
      </div>
      <div class="pcBody">
        <div>
          <mt-cell title="我的关注"></mt-cell>
        </div>
        <div>
          <mt-cell title="楼盘"  to="/myBuilding"  is-link></mt-cell>
        </div>
        <div>
          <mt-cell title="户型"  to="/nav"  is-link></mt-cell>
        </div>
        
        <mt-cell title=""></mt-cell>
        <div @click.stop.prevent="showDetail('codeView')">
          <mt-cell title="推荐二维码" is-link></mt-cell>
        </div>
        <div>
          <mt-cell title="设置登录密码"  to="/nav"  is-link></mt-cell>
        </div>
        <div  @click.stop.prevent="showDetail('codeView')">
          <mt-cell title="帮助中心" is-link></mt-cell>
        </div>
        <div  @click.stop.prevent="showDetail('codeView')">
          <mt-cell title="意见反馈" is-link></mt-cell>
        </div>
        <mt-button type="default" plain size="large">退出登录</mt-button>
      </div>
      <app-transition  ref="loginRegisterView">
        <app-loginRegister slot="content"></app-loginRegister>
      </app-transition>
      <app-transition  ref="codeView">
        <app-code slot="content"></app-code>
      </app-transition> 
  </div>
</template>

<script>
import Transition from '../tool/Transition'
import LoginRegister from './LoginRegister'
import Setting from './Setting'
import Code from './Code'
export default {
  name: 'PersonalCenter',
  data () {
    return {
      userType:"01",
      userTypeName:"开发商"
    }
  },
  methods:{
    showDetail(type){
      this.$refs[type].showView()
    },
    showLoginRegister(){
      this.$refs.loginRegisterView.showView()
    },
    showSetting(){
      this.$refs.settingView.showView()
    }
  },
  components:{
    "app-transition":Transition,
    "app-loginRegister":LoginRegister,
    "app-setting":Setting,
    "app-code":Code
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personalCenter .header{
  padding:1.5rem /* 30/20 */ 0 0 0;
  background-image:url(../../assets/headerBG.png);
  background-repeat:no-repeat; 
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}
.personalCenter .header .logo{
  width: 4rem /* 80/20 */;
  height: 4rem /* 80/20 */;
  border-radius: 50%;
  background-color: blue;
  margin:0 auto;
  border: 1px solid #333;
  background-image:url(../../assets/defaultLogo.jpg);
  background-repeat:no-repeat; 
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  box-shadow: 0 4px 2px -2px rgba(0,0,0,0.4);
}
.personalCenter .header a{
  display: block;
  margin: .5rem /* 10/20 */ 0 0 0;
  text-align: center;
  font-size: .9rem /* 18/20 */;
  font-weight: bold;
  color: #000;
  text-decoration: none;
}
.personalCenter .header .userType{
  width: 4rem /* 80/20 */;
  height: 1.7rem /* 34/20 */;
  background-color: rgb(255, 184, 21);
  color: #fff;
  font-size: .7rem /* 14/20 */;
  font-weight: bold;
  text-align: center;
  line-height: 1.7rem /* 34/20 */;
  box-shadow: 0 4px 2px -2px rgba(0,0,0,0.4);
  border-top-right-radius:.85rem /* 17/20 */;
  border-bottom-right-radius:.85rem /* 17/20 */;
}
.personalCenter .pcBody{
  padding: .6rem /* 12/20 */;
}
</style>
