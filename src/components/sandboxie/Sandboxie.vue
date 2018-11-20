<template>
    <div class="sandboxie">
        <app-header title="沙盘预览"></app-header>
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
        <div class="example-loading-container" v-show="loading">
            <div class="example-loading"></div>
        </div>
        <app-transition  ref="firstView">
            <app-first slot="content" :src="premises.panorama"></app-first>
        </app-transition>
    </div>
</template>

<script>
import Header from "../header/Header";
import ModelObj from "../three/model-obj";
import Transition from "../tool/Transition";
import First from "../house/First";
import { Toast } from "mint-ui";
export default {
  name: "Sandboxie",
  data() {
    return {
      src: "../../../static/models/shapan.obj",
      mtl: "../../../static/models/shapan.mtl",
      cameraPosition: { x: -5000, y: 2000, z: 5000 },
      loading: true,
      hasSkyBox: true,
      progress: 0,
      controlParams: {
        enableDamping: true, // an animation loop is required when either damping or auto-rotation are enabled
        dampingFactor: 0.25,
        screenSpacePanning: false,
        minDistance: 4000,
        maxDistance: 8000,
        maxPolarAngle: Math.PI / 2
      }
    };
  },
  methods: {
    onClick(intersected) {
      console.log(intersected);
      let name = intersected.object.name;
      if (!/^d\d+$/.test(name)) {
        console.log("模型格式不正确");
        return;
      }
      Toast({
        message: name,
        duration: 2000
      });
    },
    onLoad() {
      this.loading = false;
    },
    onProgress(ev) {
      // console.log(ev)
      this.progress = Math.round((ev.loaded / ev.total) * 100);
      // console.log(this.progress)
    },
    firstView() {
      this.$refs["firstView"].showView();
    }
  },
  components: {
    ModelObj,
    "app-header": Header,
    "app-transition": Transition,
    "app-first": First
  },
  computed: {
    premises() {
      return this.$store.state.premises;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sandboxie {
  position: relative;
}
.first {
  width: 1.5rem /* 30/20 */;
  height: 1.5rem /* 30/20 */;
  position: absolute;
  right: 0.5rem /* 10/20 */;
  top: 2.5rem /* 50/20 */;
  text-align: center;
  font-size: 1.5rem /* 30/20 */;
  color: white;
  background: #7f7f7f;
  border-radius: 50%;
}
.first img {
  width: 1.2rem /* 24/20 */;
  height: 1.2rem /* 24/20 */;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>