<template>
  <div class="header">
    <h1 class="header-title">{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:{
    title:{
        type:String,
        default:"三视界"
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.header{
  background-image: -webkit-gradient(linear, left top, left bottom, from(#F0F0F0), color-stop(50%, transparent));
  background-image: linear-gradient(180deg, #F0F0F0,transparent 50%);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: bottom left;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 14px;
  height: 40px;
  line-height: 1;
  padding: 0 10px;
  text-align: center;
  white-space: nowrap;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  color: #737373;
  background-color: #ffffff;
}
.header .header-title{
    overflow: visible;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    font-weight: 400;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: inherit;
}
</style>
