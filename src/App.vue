<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <app-three></app-three> -->
    <!-- <router-view/> -->
    <app-model-obj-mtl></app-model-obj-mtl>
    <!-- <app-three></app-three> -->
  </div>
</template>

<script>
import Three from './components/three/Three'
import ModelObjMtl from './components/three/ModelObjMtl'
export default {
  name: 'App',
  components: {
    "app-three":Three,
    "app-model-obj-mtl":ModelObjMtl
  }
}
</script>

<style>

</style>
