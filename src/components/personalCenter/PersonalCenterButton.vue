<template>
  <router-link class="personalCenterButton" to='/personalCenter'></router-link>
</template>

<script>
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
    width: 1.2rem /* 24/20 */;
    height: 1.2rem /* 24/20 */;
    border-radius: 50%;
    border: 2px solid #000;
    background-color: black;
    position: fixed;
    top: 1rem /* 20/20 */;
    right: .9rem /* 18/20 */;
    z-index: 2;
    background:url(../../assets/个人中心.png) no-repeat center center;
    background-size: 1.2rem /* 24/20 */ 1.2rem /* 24/20 */;
}
</style>
