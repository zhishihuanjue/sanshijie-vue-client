<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <app-three></app-three> -->
    <!-- <app-model-obj-mtl></app-model-obj-mtl> -->
    <!-- <app-three></app-three> -->
    <!-- <app-tabbar></app-tabbar> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Three from './components/three/Three'
import ModelObjMtl from './components/three/ModelObjMtl'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
export default {
  name: 'App',
  components: {
    "app-three":Three,
    "app-model-obj-mtl":ModelObjMtl,
    "app-tabbar":Nav,
    "app-home":Home,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  max-width: 540px;
  margin: 0 auto;
}
</style>
