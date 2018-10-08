<template>
  <div class="three">
  </div>
</template>

<script>
//const THREE = require('three')
import * as THREE from 'three'
import { OrbitControls } from './controls/OrbitControls'
export default {
  name: 'Three',
  data () {
    return {
        container:null,
        scene:null,
        camera:null,
        renderer:null,
        controls:null
    }
  },
  methods:{
        init(){
            this.container = document.getElementsByClassName("three")[0];
            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setPixelRatio( window.devicePixelRatio );
            this.renderer.setSize( window.innerWidth, window.innerHeight );
            this.container.appendChild( this.renderer.domElement );

            //

            this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 3000 );
            this.camera.position.set( 200, 100, 200 );
            this.camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

            // controls

            this.controls = new OrbitControls( this.camera, this.renderer.domElement );

            //this.controls.addEventListener( 'change', this.render ); // call this only in static scenes (i.e., if there is no animation loop)

            this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
            this.controls.dampingFactor = 0.25;

            this.controls.screenSpacePanning = false;

            this.controls.minDistance = 100;
            this.controls.maxDistance = 500

            this.controls.maxPolarAngle = Math.PI / 2;

            this.scene = new THREE.Scene();
            this.scene.add( new THREE.GridHelper( 1000, 10 ) );
            this.scene.background = new THREE.Color( 0xcccccc );

            let light = new THREE.DirectionalLight( 0xffffff, 2 );
            light.position.set( 1, 1, 1 );
            this.scene.add( light );

            let geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
            let material = new THREE.MeshLambertMaterial();

            let mesh = new THREE.Mesh( geometry, material );
            this.scene.add( mesh );

            window.addEventListener( 'resize', this.onWindowResize, false );
            this.render();
            this.animate();
        },
        onWindowResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize( window.innerWidth, window.innerHeight );
            this.render();
        },
        render() {
            this.renderer.render( this.scene, this.camera );
        },
        animate() {

				requestAnimationFrame( this.animate );

				this.controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

				this.render();

			}
  },
  mounted(){
    this.init();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
