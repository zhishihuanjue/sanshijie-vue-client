<template>
  <div class="header">
    <mt-header :fixed="isFixed" :title="title" class="zx-header">
      <router-link to="/" slot="left" v-if="back">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:{
    title:{
        type:String,
        default:"三视界"
    },
    isFixed:{
        type:Boolean,
        default:false
    },
    back:{
        type:Boolean,
        default:false
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
.header .zx-header{
    background-color: #fafafa;
    color: #333;
}
.header .zx-header h1{
  overflow: visible;
}
</style>
