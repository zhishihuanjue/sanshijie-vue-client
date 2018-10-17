<template>
	<transition name="first">
		<div class="first" ref="first" v-show="showFlag">
			<app-header :title="house.type"></app-header>
            <div class="img-wrapper">
                <img class="close-bt" src="./img/close.png" @click.stop.prevent="closeView" />
            </div>
            <iframe v-if="house.firstSrc" style="width:100%;height:100%;" scrolling="no" :src="house.firstSrc"></iframe>
            <div class="tip" v-else>此户型还没有上传漫游视图，敬请期待。</div>
        </div>
  </transition>
</template>

<script>
import Header from '../header/Header'
export default {
    name:"First",
    data(){
        return {
            showFlag:false
        }
    },
    props:{
      house:{
        type:Object
      }
    },
    methods:{
        showView(){
            this.showFlag = true
        },
        closeView(){
            this.showFlag = false
        },
    },
    components:{
        "app-header":Header
    }
}
</script>

<style scoped>
.first{
	position: fixed;
	left: 0;
	top: 0;
	bottom: 51px;
	background: white;
	width: 100%;
	/* z-index: 90; */
}

.first-enter-active, .first-leave-active {
  transition:  1.0s
}
.first-enter, .first-leave-to {
  transform: translateX(100%);
}

.first .img-wrapper{
	position: relative;
	width: 100%;
	height: 0;
}

.first .img-wrapper .close-bt{
	width: 1.5rem /* 30/20 */;
	height: 1.5rem /* 30/20 */;
	position: absolute;
	left: .5rem /* 10/20 */;
	top: .5rem /* 10/20 */;
	border-radius: 50%;
}
.tip{
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: .8rem /* 16/20 */;
    font-weight: bold;
    margin-top: 5rem /* 100/20 */;
}
</style>
