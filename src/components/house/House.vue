<template>
  <div class="house">
    <app-header title="户型列表"></app-header>
    <!-- 具体的户型列表 -->
    <div  ref="houseList">
      <ul class="houseList">
        <li 
          v-for="(house,index) in houses" 
          :key="index"
          @click="showDetail('houseView',house)"
          class="house-item">
          <div class="icon" :style="bg(house.img)"></div>
          <div class="content">
            <h3 class="name">{{house.type}}</h3>
            <div class="extra">
              <span class="saled">户型：</span>
              <span class="praise">{{house.houseType}}</span>
            </div>
            <div class="extra">
              <span class="saled">面积：</span>
              <span class="praise">{{house.area | areaFilter}}</span><sup>2</sup>
            </div>
            <div class="extra">
              <span class="saled">单价：</span>
              <span class="praise">{{house.unitPrice | unitPriceFilter}}</span><sup>2</sup>
            </div>
            <div class="extra">
              <span class="saled">所属楼幢：</span>
              <span class="praise">{{house.building}}</span>
            </div>
          </div>
          <div class="operation-wrapper">
            <app-operation :house="house" :operation="house.operation" @operationClick="operationClick"></app-operation>
          </div>
        </li>
      </ul>
    </div>
    <!-- 户型详情 -->
    <!-- <app-transition  ref="houseView">
      <app-house-detail slot="content" :house="selectHouse"></app-house-detail>
    </app-transition> -->
    <app-house-detail :house="selectHouse" ref="houseView" @operationClick="operationClick"></app-house-detail>
    <app-transition  ref="threeView">
      <app-three slot="content" :house="selectHouse"></app-three>
    </app-transition>
    <app-transition  ref="firstView">
      <app-first slot="content" :src="selectHouse.firstSrc"></app-first>
    </app-transition>
  </div>
</template>

<script>

import BScroll from 'better-scroll'
import Header from "../header/Header"
import Transition from "../tool/Transition"
import HouseDetail from "../houseDetail/HouseDetail"
import Operation from "./Operation"
import Three from "./Three"
import First from "./First"
import Split from '../tool/Split'
import { Toast } from 'mint-ui'
export default {
  name: 'House',
  data () {
    return {
      hasHeader:true,
      houses:[{
          "id":"001",
          "type":"A01",
          "building":"d1",
          "area":"89",
          "houseType":"三室两厅一厨一卫",
          "unitPrice":"10000",
          "operation":[1,2,3],
          "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539623165636&di=dfe6280e32ca0e196d2f2e0ab908f746&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180104%2F363ffa1396c9451c84eadcb56c2d210b.jpeg",
          "src":"../../../static/models/board.obj",
          "mtl":"",
          "firstSrc":"https://720yun.com/t/f93jeswwkn6",
          "desc":[
						"第一、现在是春节了，先祝大家节日快乐，房型图的看法其实有几个需要注意的事项，先看的还是客厅的位置和大小是不是合适你的需要，因为家庭居住环境里，客厅的布局是不是合理很关键。",
						"第二、主卧的面积我们要看一看，然后根据这个面积我们计算一下是不是适合你的家庭，主卧一般比较大一些，占整个家的百分之十左右的面积，大家要注意一下这个比例。",
						"第三、我们在看户型图的时候首先要注意的是户型的建筑面积大小，看这个户型面积是否满足居住要求，然后我们结合上面的两个要点进行户型是不是舒适和合理的分析，大家要注意一下。",
						"第四、我们买楼房主要是看房子的位置，这个也很关键，我们选择的户型中，是否南北通透是一个选择的重要考虑，因为南北通透便于空气对流，保证光线和阳光，居住环境比较舒适。",
						"第五、整体布局上面前两点是很重要的，而我们看到客厅和主卧没有太大问题的话，就需要看看次卧空间是不是太狭小，会不会导致无储物空间的问题，还是厕所的布局问题。",
						"第六、我们可以根据户型图的整体设计的面积大小，自己在电脑上来一个虚拟设计的办法，这样我们可以大体上给出家具和家电的摆放位置，也可以比较精确的计算出这个户型适不适合自己。"
          ]
        },{
          "id":"002",
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
          "id":"002",
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
          "id":"002",
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
          "id":"002",
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
          "id":"002",
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
        }
      ],
      selectHouse:{}
    }
  },
  components:{
    "app-header":Header,
    "app-operation":Operation,
    "app-transition":Transition,
    "app-house-detail":HouseDetail,
    "app-three":Three,
    "app-first":First
  },
  methods:{
    initScroll(){
      this.menuScroll = new BScroll(this.$refs.houseList,{
        click:true
      })
    },
    bg(imgName){
      return "background-image: url(" + imgName + ");"
    },
    showDetail(type,house){
      this.selectHouse = house
      this.$refs[type].showView()
    },
    operationClick(params){
      if(params.type === "collectView"){
        this.collect(params.house)
        return;
      }
      this.selectHouse = params.house
      this.$refs[params.type].showView()
    },
    collect(house){
      console.log(house)
      //如果已经关注过，则取消关注，并且已经关注过的户型，按钮要变色
      Toast({
        message: '关注成功，可前往我的关注查看',
        duration: 2000
      });
    }
  },
  mounted(){
    setTimeout(() => { 
      //this.initScroll()
    }, 2000)
  },
  filters:{
    areaFilter(area){
      return ''+area+'m'
    },
    unitPriceFilter(unitPrice){
      return ''+unitPrice+'元/m'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.houseList{

}
.house .house-item{
	display: flex;
	padding: .6rem /* 12/20 */;
  position: relative;
  border-bottom: 12px solid #f5f5f5;
}

.house .house-item .icon{
	flex: 0 0 6.5rem /* 130/20 */;
	background-position: center;
	background-size: 120% 100%;
  background-repeat: no-repeat;
	margin-right: .3rem /* 6/20 */;
	height: 6.5rem /* 130/20 */;
  box-shadow: 0 .1rem /* 2/20 */ .2rem /* 4/20 */ 0 rgba(0,0,0,0.1), 0 .15rem /* 3/20 */ .5rem /* 10/20 */ 0 rgba(0,0,0,0.09);
}
.house .house-item .content{
	flex: 1;
}

/* 具体内容样式 */ 
.house .house-item .content .name{
	font-size: .8rem /* 16/20 */;
  font-weight: bold;
	color: #333333;
	margin-bottom: .3rem /* 6/20 */;
}

.house .house-item .content .desc{
	font-size: 10px;
	line-height: 19px;
	color: #bfbfbf;
	margin-bottom: 8px;
	
	/* 超出部分显示省略号*/
	-webkit-line-clamp: 1;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.house .house-item .content .extra{
	font-size: .7rem /* 14/20 */;
	color: #333;
	margin-bottom: .3rem /* 6/20 */;
}

sup{
  vertical-align: super
}
.house-item .operation-wrapper{
	position: absolute;
	right: 0;
	bottom: 0;
}
</style>
