<template>
  <div class="code">
      <div class="header">
        <div>*我们懂得聆听*</div>
        <div>长按二维码加我们微信</div>
        <div>{{message}}</div>
      </div>
    <img :src="code" alt="" class="codeImg">
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
        code:{
          type:String,
          // default:"../../assets/code.jpg"
        }
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
    padding: 1rem /* 20/20 */;
    font-size: .9rem /* 18/20 */;
    text-align: center;
}
.code .codeImg{
    display: block;
    margin: 1rem /* 20/20 */ auto 0 auto;
    width:14.1rem /* 282/20 */; 
    height:19.65rem /* 393/20 */;
    /* background-image:url(../../assets/code.jpg); */
    background-repeat:no-repeat; 
    background-size:100% 100%;
    -moz-background-size:100% 100%;
}
</style>
