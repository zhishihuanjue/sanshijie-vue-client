<template>
  <div class="setting">
    <mt-cell title="设置登录密码"  to="/nav"  is-link></mt-cell>
    <mt-cell title="帮助中心"  to="/nav"  is-link></mt-cell>
    <mt-cell title="意见反馈"  to="/nav"  is-link></mt-cell>
    <mt-button type="default" plain size="large">退出登录</mt-button>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.setting{
  padding: 0 10px 0 10px;
}
</style>
