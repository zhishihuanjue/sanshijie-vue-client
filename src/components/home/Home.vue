<template>
  <div class="home">
    <app-header :isFixed=true :title="name"></app-header>
    <div class="swipe">
      <div class="swipe-wrapper">
          <mt-swipe ref="swipeWrapper">
              <mt-swipe-item class="swip-item-1 item" v-for="(img,index) in swipeImages" :key="index">
                <img :src="img" alt="">
              </mt-swipe-item>
          </mt-swipe>
      </div>

      <div class="button-wrapper">
          <button class="prev-button flex-item" @click.stop="prev"></button>
          <button class="next-button flex-item" @click.stop="next"></button>
      </div>
    </div>
    <span class="introduce">基本信息</span>
    <div class="container" ref="page-content">
      <ul>
        <li v-for="(item,index) in images" :key="index">
          <img v-lazy="item">
        </li>
      </ul>
    </div>
    <app-endLine></app-endLine>
  </div>
</template>

<script>
import EndLine from "../tool/EndLine"
import Header from "../header/Header"

// import BScroll from 'better-scroll'

export default {
  name: 'Home',
  data () {
    return {
      name:"三视界",
      swipeImages:[
        "../../../static/images/1.jpg",
        "../../../static/images/2.jpg",
        "../../../static/images/3.jpg",
      ],
      images:[
        "../../../static/images/4.jpg",
        "../../../static/images/5.jpg",
        "../../../static/images/6.jpg",
        "../../../static/images/7.jpg",
        "../../../static/images/8.jpg"
      ]
    }
  },
  components:{
    "app-endLine":EndLine,
    "app-header":Header
  },
  methods: {
      prev: function () {
          this.$refs.swipeWrapper.prev()
      },
      next: function () {
          this.$refs.swipeWrapper.next();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swipe{
  margin-top: 40px;
}
.swipe-wrapper{
  width: 16rem;
  height: 8rem;
}
.item img{
  width: 100%;
  height: auto;
  max-width: 100%;
  background-repeat:no-repeat; 
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}
.button-wrapper{
  position: absolute;
  top: 4.75rem;
  width: 100%;
}
.flex-item{
  position:absolute;
  height: 1.5rem /* 30/20 */;
  width: 1.5rem /* 30/20 */;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  background-repeat:no-repeat; 
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}
.prev-button{
  background-image:url(../../assets/prev.png);
  left: 1rem /* 20/20 */;
}
.next-button{
  background-image:url(../../assets/next.png);
  right: 1rem /* 20/20 */;
}
.container img{
  width: 100%;
  height: auto;
  max-width: 100%;
  background-repeat:no-repeat; 
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}
.container img[lazy=loading]{
  width: 100%;
  height: auto;
  background-color: #ddd;
}
.introduce{
  display: inline-block;
  font-size: .6rem /* 12/20 */;
  padding: 4px;
}
</style>
