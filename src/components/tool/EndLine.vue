<template>
  <div class="endLine">
    <span class="line"></span>
    <span class="content">我是有底线的</span>
    <span class="line"></span>
  </div>
</template>

<script>
export default {
  name: 'EndLine',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.endLine{
    margin: 10px 0 10px 0;
    text-align: center;
    color: #737373;
}
.endLine .content{
    font-size: .6rem /* 12/20 */;
    color: inherit;
}
.endLine .line{
    display: inline-block;
    width: 30%;
    font-size: .6rem /* 12/20 */;
    border-top: 1px solid #737373;
    vertical-align: middle;
}
</style>