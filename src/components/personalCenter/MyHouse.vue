<template>
  <div class="myHouse" ref="myHouse">
    <div class="house-wrapper" v-if="houses&&houses.length">
      <mt-search
        class="mySearch"
        placeholder="请输入楼盘名称、地址或户型面积"
        v-model="value">
      </mt-search>
      <div v-for="(house,index) in filterResult" :key="house.id" class="house">
        <div class="house-content">
          <div class="collect" @click="cancleCollect(index)"><i class="bg"></i></div>
          <div class="name">楼盘：{{house.name}}</div>
          <div class="info">户型：{{house.houseType}}</div>
          <div class="info">面积：{{house.area  | areaFilter}}<sup>2</sup></div>
          <div class="info">单价：{{house.unitPrice | unitPriceFilter}}<sup>2</sup></div>
          <div class="info">地址：{{house.address}}</div>
          <div class="icon" :style="bg(house.img)"></div>
          <div class="button">
            <router-link :to="{ name: 'home', params: { id: house.id }}">进入</router-link>
          </div>
        </div>
        <app-split/>
      </div>
    </div>
    <div class="tip" v-else>您还没有收藏户型，请扫描销售经理推荐的二维码进行收藏。</div>
    <transition name="fade">
      <div class="loading" v-if="loading">正在加载...</div>
    </transition>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Split from '../tool/Split'
import {  MessageBox,Toast } from 'mint-ui'
export default {
  name: 'MyHouse',
  data () {
    return {
      value:"",
      houses:[
          {
            "id":"abc",
            "name":"东华小区",
            "address":"昆明市盘龙区康庄大道中段",
            "type":"A02",
            "building":"d3",
            "area":"105",
            "houseType":"三室两厅一厨一卫",
            "unitPrice":"10000",
            "operation":[1,2,3],
            "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539623281153&di=7398831a2993b4f3f3c9af6c0313fb1c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170713%2F7fae2b3125724dec934fb0da5f981b79.png",
            "src":"../../../static/models/rongchuangmax2.obj",
            "mtl":"../../../static/models/rongchuangmax2.mtl",
            "firstSrc":"",
            "desc":[]
          },{
            "id":"abcd",
            "name":"东华小区",
            "address":"昆明市盘龙区康庄大道中段",
            "type":"A02",
            "building":"d3",
            "area":"99",
            "houseType":"三室两厅一厨一卫",
            "unitPrice":"10000",
            "operation":[1,2,3],
            "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539623281153&di=7398831a2993b4f3f3c9af6c0313fb1c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170713%2F7fae2b3125724dec934fb0da5f981b79.png",
            "src":"../../../static/models/rongchuangmax2.obj",
            "mtl":"../../../static/models/rongchuangmax2.mtl",
            "firstSrc":"",
            "desc":[]
          },
      ],
      currentPage:"1",
      loading:false
    }
  },
  methods:{
    bg(imgName){
      return "background-image: url(" + imgName + ");"
    },
    initScroll(){
      this.$nextTick(() => {
        if(!this.scroll){
          this.scroll = new BScroll(this.$refs.myHouse,{
            click:true,
            probeType: 2,
            //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
            //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
            pullUpLoad: {
              threshold: 10
            },
            mouseWheel: {// pc端同样能滑动
                speed: 20,
                invert: false
            },
            useTransition:false  // 防止iphone微信滑动卡顿
          })
          this.scroll.on("pullingUp",() => {
            this.loadMore()
            this.scroll.finishPullUp();//可以多次执行上拉刷新
          });
        }else{
          this.scroll.refresh()
        }
      })
    },
    cancleCollect(index){
      MessageBox.confirm('', {
         message: '确定要取消关注吗？再次关注需要扫描销售经理提供的二维码', 
         title: '提示', 
         confirmButtonText: '确定', 
         cancelButtonText: '再考虑一下' 
       }).then(action => { 
         if (action == 'confirm') {//确认的回调
          this.houses.splice(index,1)
          Toast({
            message: '恭喜您，取消关注成功',
            duration: 2000
          });
         }
       }).catch(err => { 
         if (err == 'cancel') {//取消的回调
          console.log(2);
         }
       });
    },
    loadMore(){
      console.log("loading")
      this.loading = true
      this.$axios.get("/api/getPlankThickType")
      .then((response) => {
        console.log("sucess");
        setTimeout(()=>{
          this.loading = false
        },2000)
      })
      .catch(function (error) {
        console.log("error");
      });
    }
  },
  components:{
    "app-split":Split
  },
  filters:{
    areaFilter(area){
      return ''+area+'m'
    },
    unitPriceFilter(unitPrice){
      return ''+unitPrice+'元/m'
    }
  },
  computed: {
    filterResult() {
      return this.houses.filter((item) => {
        return new RegExp(this.value, 'i').test(item.name)
         || new RegExp(this.value, 'i').test(item.address)
         || new RegExp(this.value, 'i').test(item.area)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mySearch{
  height: 52px;
  padding-left: 40px;
  background-color: #d9d9d9;
}
.myHouse{
	position: fixed;
	left: 0;
	top: 0;
	bottom: 2.75rem /* 55/20 */;
	background: white;
	width: 100%;
	z-index: 1;
}
.myHouse .house .house-content{
  padding: 12px;
}
.myHouse .house .house-content .name{
  font-size: .9rem /* 18/20 */;
  font-weight: bold;
  margin-bottom: .6rem /* 12/20 */;
  color: inherit;
  background-color: inherit
}
.myHouse .house .house-content .info{
  font-size: .7rem /* 14/20 */;
  line-height: 1rem /* 20/20 */;
  margin-bottom: .3rem /* 6/20 */;
  color: inherit;
  background-color: inherit;
}
.myHouse .house .house-content .button{
  margin-top: .6rem /* 12/20 */;
  color: #5a5a5a;
}
.myHouse .house .house-content .button a{
  display: block;
  width: 100%;
  height: 40px;
  border: 1px solid #5a5a5a;
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: .3rem /* 6/20 */;
  text-decoration: none;
  color: inherit;
  font-size: 1rem /* 20/20 */;
  text-align: center;
  line-height: 40px;
}
.house .icon{
  width:100%;
  height:0;
  padding-bottom: 100%;
  overflow:hidden;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  background-size:cover;
  box-shadow: 0 .1rem /* 2/20 */ .2rem /* 4/20 */ 0 rgba(0,0,0,0.1), 0 .15rem /* 3/20 */ .5rem /* 10/20 */ 0 rgba(0,0,0,0.09);
}
.house-content .collect{
  width: 1.5rem /* 30/20 */;
  height: 1.5rem /* 30/20 */;
  color: #ffd161;
  position: absolute;
  padding: .05rem /* 1/20 */;
  right: .6rem /* 12/20 */;
}
.house-content .collect .bg{
    background: #1E81D2;
    background-image: url(../../../static/images/collect.png);
    width: 1.5rem /* 30/20 */;
    height: 1.5rem /* 30/20 */;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: 80% 80%;
    -moz-background-size: 80% 80%;
    background-position: center center;
    position: absolute;
    right: 0;
    z-index: -1;
}

.tip{
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: .8rem /* 16/20 */;
  font-weight: bold;
  margin-top: 5rem /* 100/20 */;
}
sup{
  vertical-align: super
}
.loading{
  width: 100%;
  height: 2rem /* 40/20 */;
  position: fixed;
  left: 0;
  bottom: 0;
  background: whitesmoke;
  text-align: center;
  line-height: 2rem /* 40/20 */;
  font-size: .6rem /* 12/20 */;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>