<template>
	<transition name="house-detail">
		<div class="house-detail" ref="houseView" v-show="showFlag">
			<div class="house-wrapper">
				<div class="house-content">
					<div class="img-wrapper">
						<img class="house-img" :src="house.img"/>
						<img class="close-bt" src="./img/close.png" @click.stop.prevent="closeView" />
						<img class="share-bt" src="./img/share.png" />
						<img class="more-bt" src="./img/more.png" />
					</div>

					<div class="content-wrapper">
						<h3 class="type">{{house.type}}</h3>
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
						<div class="operation-wrapper">
							<app-operation :operation="house.operation"></app-operation>
						</div>
					</div>
				</div>

				<!-- 其他说明 -->
				<div class="rating-wrapper">
					<div class="rating-title">户型介绍</div>
					<div v-if="house.desc" class="comment-item" v-for="(item,index) in house.desc" :key="index">
						{{item}}
					</div>
				</div>
			</div>
		</div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'
import Operation from '../house/Operation'
	export default {
    name:"HouseDetail",
		data(){
      return {
        showFlag:false
      }
    },
    props:{
      house:{
        type:Object
      }
    },
    methods:{
      showView(){
				this.showFlag = true
				this.$nextTick(() => {
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.houseView,{
              click:true
            })
          }else{
            this.scroll.refresh()
          }
        })
      },
      closeView(){
        this.showFlag = false
      }
    },
    components:{
      "app-operation":Operation
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

<style>
.house-detail{
	position: fixed;
	left: 0;
	top: 0;
	bottom: 63px;
	background: white;
	width: 100%;
	/* z-index: 90; */
}

.house-detail-enter-active, .house-detail-leave-active {
  transition:  1.0s
}
.house-detail-enter, .house-detail-leave-to {
  transform: translateX(100%);
}

.house .house-wrapper .house-content .img-wrapper{
	position: relative;
	width: 100%;
	height: 0;
	padding-top: 100%;
}

.house .house-wrapper .house-content .img-wrapper .house-img{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
}

.house .house-wrapper .house-content .img-wrapper .close-bt{
	width: 1.5rem /* 30/20 */;
	height: 1.5rem /* 30/20 */;
	position: absolute;
	left: .5rem /* 10/20 */;
	top: .5rem /* 10/20 */;
	text-align: center;
	font-size: 1.5rem /* 30/20 */;
	color: white;
	/* background: #7f7f7f; */
	border-radius: 50%;
}
.house .house-wrapper .house-content .img-wrapper .share-bt,
.house .house-wrapper .house-content .img-wrapper .more-bt{
	width: 1.5rem /* 30/20 */;
	height: 1.5rem /* 30/20 */;
	position: absolute;
	top: .5rem /* 10/20 */;
}
.house .house-wrapper .house-content .img-wrapper .share-bt{
	right: 2.5rem /* 50/20 */;
}
.house .house-wrapper .house-content .img-wrapper .more-bt{
	right: .5rem /* 10/20 */;
}

.house .house-wrapper .house-content .content-wrapper{
	padding: 0 .6rem /* 12/20 */ 0 .6rem /* 12/20 */;
	position: relative;
}
.house .house-wrapper .house-content .content-wrapper .type{
	font-size: .9rem /* 18/20 */;
	color: #333333;
	line-height: 1.5rem /* 30/20 */;
	font-weight: bold;
}
.house .house-wrapper .house-content .content-wrapper .extra{
	font-size: .7rem /* 14/20 */;
	color: #333;
	padding: 0 .3rem /* 6/20 */ .3rem /* 6/20 */ .3rem /* 6/20 */;
}
.house .house-wrapper .house-content .content-wrapper .saled,
.house .house-wrapper .house-content .content-wrapper .praise{
	font-size: .8rem /* 16/20 */;
	color: #000;
	margin-bottom: .3rem /* 6/20 */;
}

.house .house-wrapper .house-content .operation-wrapper{
	position: absolute;
	right: .9rem /* 18/20 */;
	bottom: 0;
}

.house .house-wrapper .rating-wrapper{
	padding:.6rem /* 12/20 */;
}
.house .house-wrapper .rating-wrapper .rating-title{
	font-size: .9rem /* 18/20 */;
	font-weight: bold;
}

.house .house-wrapper .rating-wrapper .comment-item{
	padding: .3rem /* 6/20 */;
	border-bottom: 1px solid #F4F4F4;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	font-size: .8rem /* 16/20 */;
	line-height: 1.2rem /* 24/20 */;
	text-indent:1.6rem /* 32/20 */;
}
</style>
