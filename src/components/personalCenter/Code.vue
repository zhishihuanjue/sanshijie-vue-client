<template>
  <div class="code">
      <div class="header">
        <div>*我们懂得聆听*</div>
        <div>长按二维码加我们微信</div>
        <div>{{message}}</div>
      </div>
    <img src="../../assets/code.jpg" alt="" class="codeImg">
  </div>
</template>

<script>
export default {
  name: 'Code',
  props:{
        message: {
            type: String,
            default: "寻求帮助和反馈意见"
        },
    },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.code{
  position:absolute;
  left:0; 
  top:0; 
  width:100%; 
  height:100%;
  background-color: rgb(255, 255, 255);
}
.code .header{
    padding: 20px;
    font-size: 18px;
    text-align: center;
}
.code .codeImg{
    display: block;
    margin: 20px auto 0 auto;
    width:282px; 
    height:393px;
    background-image:url(../../assets/code.jpg);
    background-repeat:no-repeat; 
    background-size:100% 100%;
    -moz-background-size:100% 100%;
}
</style>
