<template>
    <div class="three">
        <app-header :title="house.type"></app-header>
        <div
            v-if="house.src && house.mtl"
        >
            <model-obj
                :backgroundAlpha="0"
                :src=house.src
                :mtl=house.mtl
                :hasSkyBox=hasSkyBox
                :cameraPosition=cameraPosition
                :controlParams=controlParams
                @on-click="onClick"
                @on-load="onLoad"
                @on-progress="onProgress"
            ></model-obj>
            <div class="example-loading" v-show="loading"></div>
        </div>
        <div class="tip" v-else>此户型还没有上传3D模型，敬请期待。</div>
    </div>
</template>

<script>
import Header from '../header/Header'
import ModelObj from '../three/model-obj'
export default {
    name:"Three",
    data(){
        return {
            cameraPosition : {x:-2000,y:1000,z:2000},
            loading : true,
            hasSkyBox : true,
            progress : 0,
            controlParams:{
                enableDamping:true, // an animation loop is required when either damping or auto-rotation are enabled
                dampingFactor:0.25,
                screenSpacePanning:false,
                minDistance:2000,
                maxDistance:4000,
                maxPolarAngle:Math.PI / 2
            }
        }
    },
    props:{
      house:{
        type:Object
      }
    },
    methods:{
        onClick(intersected){
            console.log(intersected)
            let name = intersected.object.name
            if(!/^d\d+$/.test(name))return;
            Toast({
                message: name,
                duration: 2000
            });
        },
        onLoad() {
            this.loading = false
        },
        onProgress(ev){
            this.progress = Math.round(ev.loaded / ev.total * 100);
        },
    },
    components:{
        ModelObj,
        "app-header":Header
    }
}
</script>

<style scoped>
.example-loading{
    /*固定loading*/
    position: fixed;
    top: 50%;
    left: 50%;
    /*垂直水平居中*/
    margin: -20px 0 0 -20px;
    width: 40px;
    height: 40px;
    border: 2px solid;
    border-color: #333 #333 transparent;
    border-radius: 50%;
    box-sizing: border-box;
    /*动画时间1s，线性变化，无限循环*/
    animation: loading 1s linear infinite;
}

@keyframes loading{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

.three .img-wrapper{
	position: relative;
	width: 100%;
	height: 0;
}

.three .img-wrapper .close-bt{
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

.tip{
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: .8rem /* 16/20 */;
    font-weight: bold;
    margin-top: 5rem /* 100/20 */;
}
</style>
