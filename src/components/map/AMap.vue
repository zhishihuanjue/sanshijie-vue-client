<template>
  <!--<div id="allmap" style="width: 100%; height: {{mapHeight}}px"></div>-->
  <!--<div id="allmap":style="{width: '100%', height: mapHeight + 'px'}"></div>-->
  <div id="allmap" v-bind:style="mapStyle"></div>
</template>
<script>
export default {
  data: function() {
    return {
      mapStyle: {
        width: "100%",
        height: this.mapHeight + "px"
      }
    };
  },
  props: {
    // 地图在该视图上的高度
    mapHeight: {
      type: Number,
      default: 500
    },
    // 经度
    longitude: {
      type: Number,
      default: 116.404
    },
    // 纬度
    latitude: {
      type: Number,
      default: 39.915
    },
    description: {
      type: String,
      default: "天安门"
    }
  },
  mounted: function() {
    var map = new AMap.Map("allmap", {
      zoom: 11, //级别
      center: [116.397428, 39.90923], //中心点坐标
      viewMode: "3D" //使用3D视图
    });
  }
};
</script>
 
<!--Add"scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>