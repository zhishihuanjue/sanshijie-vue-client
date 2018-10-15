<template>
  <div class="house">
    <app-header title="户型列表"></app-header>
    <!-- 具体的户型列表 -->
    <ul class="houseList">
      <li 
        v-for="(house,index) in houses" 
        :key="index" 
        @click="showDetail(house)"
        class="house-item">
        <div class="icon" :style="head_bg(house.img)"></div>
        <div class="content">
          <h3 class="name">{{house.type}}</h3>
          <p class="desc" v-if="house.description">{{house.description}}</p>
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
        <div class="cartcontrol-wrapper">
          <app-operation :operation="house.operation"></app-operation>
        </div>
      </li>
    </ul>
    <!-- 户型详情 -->
    <app-house-detail :house="selectHouse" ref="houseView"></app-house-detail>
  </div>
</template>

<script>
import Header from "../header/Header"
import HouseDetail from "../houseDetail/HouseDetail"
import Operation from "./Operation"
export default {
  name: 'House',
  data () {
    return {
      hasHeader:true,
      houses:[{
          "key":"001",
          "type":"A01",
          "building":"d1",
          "area":"89",
          "houseType":"三室两厅一厨一卫",
          "unitPrice":"10000",
          "operation":[1,2,3],
          "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539623165636&di=dfe6280e32ca0e196d2f2e0ab908f746&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180104%2F363ffa1396c9451c84eadcb56c2d210b.jpeg"
        },{
          "key":"002",
          "type":"A02",
          "building":"d3",
          "area":"105",
          "houseType":"三室两厅一厨一卫",
          "unitPrice":"10000",
          "operation":[1,2,3],
          "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539623281153&di=7398831a2993b4f3f3c9af6c0313fb1c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170713%2F7fae2b3125724dec934fb0da5f981b79.png"
        }
      ],
      selectHouse:{}
    }
  },
  components:{
    "app-header":Header,
    "app-operation":Operation,
    "app-house-detail":HouseDetail
  },
  methods:{
    head_bg(imgName){
      return "background-image: url(" + imgName + ");"
    },
    showDetail(house){
      this.selectHouse = house

      this.$refs.houseView.showView()
      console.log(123)
    }
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
  padding: 0 .3rem /* 6/20 */;
}
.house .house-item{
	display: flex;
	padding: .5rem /* 10/20 */ 0 .5rem /* 10/20 */ 0;
  position: relative;
  border-bottom: 1px solid #d9d9d9;
}

.house .house-item .icon{
	flex: 0 0 6rem /* 120/20 */;
	background-position: center;
	background-size: 120% 100%;
  background-repeat: no-repeat;
	margin-right: .5rem /* 10/20 */;
	height: 6rem /* 120/20 */;
  box-shadow: 0 .1rem /* 2/20 */ .2rem /* 4/20 */ 0 rgba(0,0,0,0.1), 0 .15rem /* 3/20 */ .5rem /* 10/20 */ 0 rgba(0,0,0,0.09);
}
.house .house-item .content{
	flex: 1;
}

/* 具体内容样式 */ 
.house .house-item .content .name{
	font-size: .8rem /* 16/20 */;
	line-height: 1.05rem /* 21/20 */;
	color: #333333;
	margin-bottom: .5rem /* 10/20 */;
	padding-right: 1.35rem /* 27/20 */;
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
	font-size: .5rem /* 10/20 */;
	color: #333;
	margin-bottom: .35rem /* 7/20 */;
}

sup{
  vertical-align: super
}
.house-item .cartcontrol-wrapper{
	position: absolute;
	right: 0;
	bottom: 0;
}
</style>
