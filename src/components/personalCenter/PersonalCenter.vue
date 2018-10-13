<template>
  <div class="personalCenter">
      <app-back></app-back>
      <div class="header">
        <div class="userType">
          {{userTypeName}}
        </div>
        <div class="logo"></div>
        <!-- <a class="tel">18213917293</a> -->
        <router-link to="/loginRegister">点击登录</router-link>
      </div>
      <div class="pcBody">
        <mt-cell title="我的关注"></mt-cell>
        <mt-cell title="楼盘"  to="/myBuilding"  is-link></mt-cell>
        <mt-cell title="户型"  to="/nav"  is-link></mt-cell>
        <mt-cell title=""></mt-cell>
        <mt-cell title="推荐二维码"  to="/"  is-link></mt-cell>
        <mt-cell title="设置"  to="/setting"  is-link></mt-cell>
      </div>
  </div>
</template>

<script>
import Back from '../tool/Back'
export default {
  name: 'PersonalCenter',
  data () {
    return {
      userType:"01",
      userTypeName:"开发商"
    }
  },
  components:{
    "app-back":Back
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personalCenter{
  position:absolute;
  left:0; 
  top:0; 
  width:100%; 
  height:100%;
  background-color: #fff;
}
.personalCenter .header{
  padding:1.5rem /* 30/20 */ 0 0 0;
  /* border: 1px solid black; */
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
  font-weight: bolder;
  color: #000;
}
.personalCenter .header .userType{
  width: 4rem /* 80/20 */;
  height: 1.7rem /* 34/20 */;
  background-color: rgb(255, 184, 21);
  color: #fff;
  font-size: .8rem /* 16/20 */;
  font-weight: bolder;
  text-align: center;
  line-height: 1.7rem /* 34/20 */;
  box-shadow: 0 4px 2px -2px rgba(0,0,0,0.4);
  border-top-right-radius:.85rem /* 17/20 */;
  border-bottom-right-radius:.85rem /* 17/20 */;
}
.personalCenter .pcBody{
  padding: .5rem /* 10/20 */;
}
</style>
