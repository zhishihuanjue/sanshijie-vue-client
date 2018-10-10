<template>
  <div class="home">
    <div class="homeHeader"></div>
    <div class="swipe">
      <div class="swipe-wrapper">
          <mt-swipe ref="swipeWrapper">
              <!-- <mt-swipe-item v-for="(img,index) in swipeImages" class="item" :key="index">
                <div class="zoomImage" style="background-image:url(../../../static/images/2.jpg)"></div>
              </mt-swipe-item> -->
              <mt-swipe-item class="swip-item-1 item" v-for="(img,index) in swipeImages" :key="index">
                <div style="background-image:url(../../../static/images/2.jpg)"></div>
              </mt-swipe-item>
          </mt-swipe>
      </div>

      <div class="button-wrapper">
          <button class="prev-button flex-item" @click.stop="prev"></button>
          <button class="next-button flex-item" @click.stop="next"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      swipeImages:[
        "../../../static/images/1.jpg"
      ]
    }
  },
  methods: {
      prev: function () {
          this.$refs.swipeWrapper.prev()
      },
      next: function () {
          this.$refs.swipeWrapper.next();
      }
  },
  filters:{
    bgImage(img){
      return "background-image:url(" + img + ")"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homeHeader{
  height: 30px;
}
.swipe{
  position: relative;
}
.swipe-wrapper{
  width: 100%;
  height:0;
  padding-bottom: 100%;
}
.item div{
  width:100%;
  height:0;
  padding-bottom: 100%;
  overflow:hidden;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  background-size:cover;
}
.button-wrapper{
  position: absolute;
  top: 85px;
  width: 100%;
}
.flex-item{
  position:absolute;
  height: 30px;
  width: 30px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  background-repeat:no-repeat; 
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}
.prev-button{
  background-image:url(../../assets/prev.png);
  left: 20px;
}
.next-button{
  background-image:url(../../assets/next.png);
  right: 20px;
}
</style>
