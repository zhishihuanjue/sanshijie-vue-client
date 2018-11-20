<template>
  <div class="home">
    <app-header :isFixed=true :title="premises.name || name"></app-header>
    Logo:{{premises.logo}}<br>
    开发商:{{premises.developer}}<br>
    地址:{{premises.province + premises.city + premises.area + premises.address}}<br>
    开盘时间:{{premises.openTime}}--{{premises.endTime}}<br>
    联系电话:{{premises.phone}}<br>
    备注信息:{{premises.remark}}<br>
    视频地址:{{premises.videoAddress}}<br>
    经纬度:{{premises.latitude}}--{{premises.longitude}}
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
    <app-split></app-split>
    <div class="menu">
      <a class="tab-item" v-for="(item,index) in menus" :key="index" @click="menu(index)">
        <div class="tab-item-icon tab-item-icon-care" :style="{ 'background-image':'url('+item.src+')'}"></div>
        <div class="tab-item-lable">
            {{item.title}}
        </div>
      </a>
    </div>
    <app-split></app-split>
    <!-- <span class="introduce">基本信息</span> -->
    <div class="container" ref="page-content">
      <ul>
        <li v-for="(item,index) in images" :key="index">
          <img v-lazy="item">
        </li>
      </ul>
    </div>
    <app-endLine></app-endLine>
    <!-- <app-bMap></app-bMap> -->
    <app-aMap></app-aMap>
  </div>
</template>

<script>
import EndLine from "../tool/EndLine";
import Split from "../tool/Split";
import Header from "../header/Header";
import BMap from "../map/BMap";
import AMap from "../map/AMap";

// import BScroll from 'better-scroll'

export default {
  name: "Home",
  data() {
    return {
      name: "三视界",
      swipeImages: [
        "../../../static/images/1.jpg",
        "../../../static/images/2.jpg",
        "../../../static/images/3.jpg"
      ],
      images: [
        "../../../static/images/4.jpg",
        "../../../static/images/5.jpg",
        "../../../static/images/6.jpg",
        "../../../static/images/7.jpg",
        "../../../static/images/8.jpg"
      ],
      menus: [
        {
          title: "关注",
          src: "../../../static/images/collect.png"
        },
        {
          title: "关注",
          src: "../../../static/images/collect.png"
        },
        {
          title: "关注",
          src: "../../../static/images/collect.png"
        }
      ]
    };
  },
  components: {
    "app-endLine": EndLine,
    "app-header": Header,
    "app-split": Split,
    // "app-bMap": BMap,
    "app-aMap": AMap
  },
  methods: {
    prev() {
      this.$refs.swipeWrapper.prev();
    },
    next() {
      this.$refs.swipeWrapper.next();
    },
    menu(index) {
      console.log(index);
    },
    getPremisesById(id) {
      this.$axios.get(`/api/premises/getPremisesById?id=${id}`).then(res => {
        // 操作成功
        if (res.status == 200 && res.data && res.data.success) {
          this.$store.dispatch("setPremises", res.data.obj)
        }
        console.log(res.data.obj)
      });
    }
  },
  created() {
    this.getPremisesById(this.$route.params.id);
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
.menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  color: #ffffff;
  background-color: #1e81d2;
}
.menu .tab-item {
  display: block;
  padding: 0.35rem /* 7/20 */ 0;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-decoration: none;
  color: inherit;
  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
}
.menu .tab-item .tab-item-icon {
  width: 1.4rem /* 28/20 */;
  height: 1.4rem /* 28/20 */;
  margin: 0 auto 0.25rem /* 5/20 */;
  border-radius: 50%;
  background-color: #1e81d2;
  background-repeat: no-repeat;
  background-attachment: "fixed";
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.menu .tab-item .tab-item-icon > * {
  display: block;
  width: 100%;
  height: 100%;
}
.menu .tab-item .tab-item-lable {
  color: inherit;
  font-size: 0.6rem /* 12/20 */;
  line-height: 1;
}
.swipe-wrapper {
  width: 16rem;
  height: 8rem;
}
.item img {
  width: 100%;
  height: auto;
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.button-wrapper {
  position: absolute;
  top: 4.75rem;
  width: 100%;
}
.flex-item {
  position: absolute;
  height: 1.5rem /* 30/20 */;
  width: 1.5rem /* 30/20 */;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.prev-button {
  background-image: url(../../assets/prev.png);
  left: 1rem /* 20/20 */;
}
.next-button {
  background-image: url(../../assets/next.png);
  right: 1rem /* 20/20 */;
}
.container {
  font-size: 0;
}
.container img {
  width: 100%;
  height: auto;
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.container img[lazy="loading"] {
  width: 100%;
  height: auto;
  background-color: #ddd;
}
.introduce {
  display: inline-block;
  font-size: 0.8rem /* 16/20 */;
  padding: 0.3rem /* 6/20 */;
}
</style>
