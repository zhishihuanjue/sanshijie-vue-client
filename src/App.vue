<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <app-three></app-three> -->
    <!-- <app-model-obj-mtl></app-model-obj-mtl> -->
    <!-- <app-three></app-three> -->
    <!-- <app-tabbar></app-tabbar> -->
    <router-view/>
  </div>
</template>

<script>
import Three from './components/three/Three'
import ModelObjMtl from './components/three/ModelObjMtl'
import Nav from './components/nav/Nav'
export default {
  name: 'App',
  components: {
    "app-three":Three,
    "app-model-obj-mtl":ModelObjMtl,
    "app-tabbar":Nav
  }
}
</script>

<style>

</style>
