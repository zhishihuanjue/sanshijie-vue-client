<template>
    <transition name="detail">
        <div class="detail" v-show="showFlag">
            <div class="img-wrapper">
                <img class="close-bt" src="../houseDetail/img/close.png" @click.stop.prevent="closeView"/>
            </div>
            <slot name="content"></slot>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'Detail',
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
.detail{
	position: fixed;
	left: 0;
	top: 0;
	bottom: 55px;
	background: white;
	width: 100%;
}
.detail-enter-active, .detail-leave-active {
  transition:  1.0s
}
.detail-enter, .detail-leave-to {
  transform: translateX(100%);
}
.detail .img-wrapper{
	position: relative;
	width: 100%;
	height: 0;
    z-index: 2;
}
.detail .img-wrapper .close-bt{
	width: 1.5rem /* 30/20 */;
	height: 1.5rem /* 30/20 */;
	position: absolute;
	left: .5rem /* 10/20 */;
	top: .5rem /* 10/20 */;
	text-align: center;
	font-size: 1.5rem /* 30/20 */;
	color: white;
	/* background: #7f7f7f; */
	border-radius: 50%;
}
</style>
