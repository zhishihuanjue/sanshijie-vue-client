<template>
    <div class="first">
        <iframe v-if="house.firstSrc" style="width:100%;height:100%;" scrolling="no" :src="house.firstSrc"></iframe>
        <div class="tip" v-else>此户型还没有上传漫游视图，敬请期待。</div>
    </div>
</template>

<script>
import Header from '../header/Header'
export default {
    name:"First",
    data(){
        return {
            
        }
    },
    props:{
      house:{
        type:Object
      }
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
	background: white;
	width: 100%;
    height: 100%;
	z-index: 1;
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
