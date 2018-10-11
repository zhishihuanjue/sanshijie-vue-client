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
    width: 1.5rem /* 30/20 */;
    height: 1.5rem /* 30/20 */;
    border-radius: 50%;
    border: 2px solid #333;
    background-color: black;
    position: fixed;
    top: .6rem /* 12/20 */;
    right: .6rem /* 12/20 */;
    z-index: 1;
    background:url(../../assets/个人中心.png) no-repeat center center;
    background-size: 1.5rem /* 30/20 */ 1.5rem /* 30/20 */;
}
</style>
