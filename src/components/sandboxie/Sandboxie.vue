<template>
    <div class="sandboxie">
        <!-- <app-header title="沙盘预览"></app-header> -->
        <div class="first">
            <img class="close-bt" src="../house/img/firstView.png" @click.stop.prevent="firstView"/>
        </div>
        <model-obj 
            :backgroundAlpha="0"
            :src=src
            :mtl=mtl
            :hasSkyBox=hasSkyBox
            :cameraPosition=cameraPosition
            :controlParams=controlParams
            @on-click="onClick"
            @on-load="onLoad"
            @on-progress="onProgress"
        ></model-obj>
        <div class="example-loading" v-show="loading"></div>
        <app-transition  ref="firstView">
            <app-first slot="content" :src="firstSrc"></app-first>
        </app-transition>
    </div>
</template>

<script>
    import Header from '../header/Header'
    import ModelObj from '../three/model-obj'
    import Transition from "../tool/Transition"
    import First from "../house/First"
    import { Toast } from 'mint-ui'
    export default {
        name:"Sandboxie",
        data(){
            return {
                src : "../../../static/models/shapan.obj",
                mtl : "../../../static/models/shapan.mtl",
                firstSrc:"https://720yun.com/t/f93jeswwkn6",
                cameraPosition : {x:-5000,y:2000,z:5000},
                loading : true,
                hasSkyBox : true,
                progress : 0,
                controlParams:{
                    enableDamping:true, // an animation loop is required when either damping or auto-rotation are enabled
                    dampingFactor:0.25,
                    screenSpacePanning:false,
                    minDistance:4000,
                    maxDistance:8000,
                    maxPolarAngle:Math.PI / 2
                }
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
                // console.log(ev)
                this.progress = Math.round(ev.loaded / ev.total * 100);
                // console.log(this.progress)
            },
            firstView(){
                this.$refs["firstView"].showView()
            }
        },
        components: {
            ModelObj,
            "app-header":Header,
            "app-transition":Transition,
            "app-first":First,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sandboxie{
    position: relative;
}
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
.first{
	width: 1.5rem /* 30/20 */;
	height: 1.5rem /* 30/20 */;
	position: absolute;
	left: .5rem /* 10/20 */;
	top: 2.5rem /* 50/20 */;
	text-align: center;
	font-size: 1.5rem /* 30/20 */;
	color: white;
	background: #7f7f7f;
	border-radius: 50%;
}
.first img{
    width: 1.2rem /* 24/20 */;
    height: 1.2rem /* 24/20 */;
    position: absolute;
    top:50%; 
    left:50%;
    transform: translate(-50%,-50%);
}
</style>