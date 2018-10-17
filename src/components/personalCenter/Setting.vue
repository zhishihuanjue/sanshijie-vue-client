<template>
<transition name="setting-detail">
  <div class="setting" v-show="showFlag">
    <div class="img-wrapper">
        <img class="close-bt" src="../houseDetail/img/close.png" @click.stop.prevent="closeView"/>
    </div>
    <mt-cell title="设置登录密码"  to="/nav"  is-link></mt-cell>
    <mt-cell title="帮助中心"  to="/code"  is-link></mt-cell>
    <mt-cell title="意见反馈"  to="/code"  is-link></mt-cell>
    <mt-button type="default" plain size="large">退出登录</mt-button>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      showFlag:false
    }
  },
  methods:{
    showView(){
      this.showFlag = true
    },
    closeView(){
      this.showFlag = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.setting{
  padding: 0 .5rem /* 10/20 */ 0 .5rem /* 10/20 */;
}
.setting{
	position: fixed;
	left: 0;
	top: 0;
	bottom: 63px;
	background: white;
	width: 100%;
	/* z-index: 90; */
}

.setting-detail-enter-active, .setting-detail-leave-active {
  transition:  1.0s
}
.setting-detail-enter, .setting-detail-leave-to {
  transform: translateX(100%);
}
</style>
