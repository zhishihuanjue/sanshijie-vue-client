<template>
    <div class="sandboxie">
        <model-obj 
            :backgroundAlpha="0"
            :src=src
            :mtl=mtl
            :cameraPosition=cameraPosition
            @on-click="onClick"
            @on-load="onLoad"
            @on-progress="onProgress"
        ></model-obj>
        <div class="example-loading" v-show="loading"></div>
    </div>
</template>

<script>
    import ModelObj from '../three/model-obj'

    export default {
        name:"Sandboxie",
        data(){
            return {
                src:"static/models/rongchuangmax2.obj",
                mtl:"static/models/rongchuangmax2.mtl",
                cameraPosition:{x:-1000,y:500,z:1000},
                loading: true,
                progress: 0
            }
        },
        methods:{
            onClick(...args){
                console.log(args)
            },
            onLoad() {
                this.loading = false
            },
            onProgress(ev){
                // console.log(ev)
                this.progress = Math.round(ev.loaded / ev.total * 100);
                // console.log(this.progress)
            },
        },
        components: {
            ModelObj
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>