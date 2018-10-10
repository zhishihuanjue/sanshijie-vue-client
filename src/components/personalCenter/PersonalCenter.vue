<template>
  <div class="personalCenter">
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
        <mt-cell title="设置"  to="/setting"  is-link></mt-cell>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalCenter',
  data () {
    return {
      userType:"01",
      userTypeName:"开发商"
    }
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
  padding:30px 0 0 0;
  /* border: 1px solid black; */
  background-image:url(../../assets/headerBG.png);
  background-repeat:no-repeat; 
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}
.personalCenter .header .logo{
  width: 80px;
  height: 80px;
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
  margin: 10px 0 0 0;
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
  color: #000;
}
.personalCenter .header .userType{
  width: 80px;
  height: 34px;
  background-color: rgb(255, 184, 21);
  color: #fff;
  font-size: 16px;
  font-weight: bolder;
  text-align: center;
  line-height: 34px;
  box-shadow: 0 4px 2px -2px rgba(0,0,0,0.4);
  border-top-right-radius:17px;
  border-bottom-right-radius:17px;
}
.personalCenter .pcBody{
  padding: 10px;
}
</style>
