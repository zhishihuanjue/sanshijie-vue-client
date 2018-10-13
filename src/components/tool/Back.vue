<template>
  <router-link to="/" class="page-back router-link-active">
    <i class="mintui mintui-back"></i>
  </router-link>
</template>

<script>
export default {
  name: 'Back',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-back {
  display: inline-block;
  top: 12px;
  left: 10px;
  position: absolute;
  width: 40px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  z-index: 1;
  color: black;
}
.page-back i {
  font-size: 24px;
  line-height: 40px;
}
</style>
