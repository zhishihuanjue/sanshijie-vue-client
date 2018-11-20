<script>
import { OBJLoader } from './loaders/OBJLoader'
import { MTLLoader } from './loaders/MTLLoader'
import { toIndexed } from './util'
import mixin from './model-mixin.vue'

import * as THREE from 'three'
import { getSize, getCenter } from './util'

export default {
    name: 'model-obj',
    mixins: [ mixin ],
    props: {
        lights: {
            type: Array,
            default() {
                return [
                    {
                        type: 'ambientlight',
                        color: 0xffffff,
                        intensity: 0.8
                    },
                    {
                        type: 'hemispherelight',
                        position: { x: 0, y: 1, z: 0 },
                        skyColor: 0xaaaaff,
                        groundColor: 0x806060,
                        intensity: 0.6
                    },
                    {
                        type: 'directionallight',
                        position: { x: 1, y: 1, z: 1 },
                        color: 0xffffff,
                        intensity: 0.8
                    }
                ]
            }
        },
        smoothing: {
            type: Boolean,
            default: false
        },
        mtlPath: {
            type: String
        },
        mtl: {
            type: String
        },
        hasSkyBox: {
            type: Boolean,
            default: false
        },
    },
    data() {

        const objLoader = new OBJLoader();
        const mtlLoader = new MTLLoader();

        mtlLoader.setCrossOrigin( this.crossOrigin );

        return {
            loader: objLoader,
            mtlLoader
        }
    },
    watch: {
        mtl() {
            this.load();
        },
        skyBox(){
            if(this.hasSkyBox){
                this.createSkyBox()
            }
        }
    },
    methods: {
        process( object ) {
            if ( this.smoothing ) {
                object.traverse( child => {
                    if ( child.geometry ) {
                        child.geometry = toIndexed( child.geometry );
                        child.geometry.computeVertexNormals();
                    }
                } )
            }
        },
        load() {

            if ( !this.src ) return;

            if ( this.object ) {
                this.wrapper.remove( this.object );
            }

            const onLoad = object => {

                if ( this.process ) {
                    this.process( object );
                }

                this.addObject( object )

                this.$emit( 'on-load' );

            }

            const onProgress = xhr => {

                this.$emit( 'on-progress', xhr );

            }

            const onError = err => {

                this.$emit( 'on-error', err );

            }

            if ( this.mtl ) {

                let mtlPath = this.mtlPath;
                let mtlSrc = this.mtl;

                if ( !this.mtlPath ) {

                    const result = /^(.*\/)([^/]*)$/.exec( this.mtl );

                    if ( result ) {
                        mtlPath = result[ 1 ];
                        mtlSrc = result[ 2 ];
                        console.log(mtlPath)
                        console.log(mtlSrc)
                    }

                }

                if ( mtlPath ) {
                    this.mtlLoader.setPath( mtlPath )
                }

                this.mtlLoader.load( mtlSrc, materials => {

                    materials.preload();

                    this.loader.setMaterials( materials );

                    this.loader.load( this.src, onLoad, onProgress, onError );

                }, () => {}, onError );

            } else {

                this.loader.load( this.src, onLoad, onProgress, onError );

            }

        },
        createSkyBox(){
            if(!this.hasSkyBox)return;
            var cubeMap = new THREE.CubeTexture( [] );
		    cubeMap.format = THREE.RGBFormat;
            new THREE.ImageLoader().load( '../../../static/images/skybox.png',(img)=>{
                var size = 256;
                var getSide = function ( x, y ) {
                    var canvas = document.createElement( 'canvas' );
                    canvas.width = size;
                    canvas.height = size;
                    canvas.fillStyle="#aec5da";
                    var context = canvas.getContext( '2d' );
                    if (img){
                        context.drawImage( img, - x * size, - y * size );
                    }
                        
                    return canvas;
                };
                cubeMap.images[ 0 ] = getSide( 2, 1 ); // px
                cubeMap.images[ 1 ] = getSide( 0, 1 ); // nx
                cubeMap.images[ 2 ] = getSide( 1, 0 ); // py
                cubeMap.images[ 3 ] = getSide( 1, 2 ); // ny
                cubeMap.images[ 4 ] = getSide( 1, 1 ); // pz
                cubeMap.images[ 5 ] = getSide( 3, 1 ); // nz
                cubeMap.needsUpdate = true;
                
                var cubeShader = THREE.ShaderLib[ 'cube' ];
                cubeShader.uniforms[ 'tCube' ].value = cubeMap;
                var skyBoxMaterial = new THREE.ShaderMaterial( {
                    fragmentShader: cubeShader.fragmentShader,
                    vertexShader: cubeShader.vertexShader,
                    uniforms: cubeShader.uniforms,
                    depthWrite: false,
                    side: THREE.BackSide
                } );
                
                var skyBox = new THREE.Mesh(
                    new THREE.BoxGeometry( size*30, size*30, size*30),
                    skyBoxMaterial
                );
                //this.addObject( skyBox )
                this.wrapper.add( skyBox )
            } );
        },
    }
}
</script>
