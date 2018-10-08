<template>
  <router-link class="personalCenterButton" to='/personalCenter'></router-link>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'personalCenterButton',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personalCenterButton{
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #333;
    background-color: black;
    position: fixed;
    top: 12px;
    right: 12px;
    z-index: 1;
    background:url(../../assets/个人中心.png) no-repeat center center;
    background-size: 30px 30px;
}
</style>
