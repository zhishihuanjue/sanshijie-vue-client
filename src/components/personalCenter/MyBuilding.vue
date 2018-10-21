<template>
  <div class="myBuilding" ref="myBuilding">
    <div class="building-wrapper" v-if="buildings&&buildings.length">
      <div v-for="(building,index) in buildings" :key="building.id" class="building">
        <div class="building-content">
          <div class="collect" @click="cancleCollect(index)"><i class="bg"></i></div>
          <div class="name">楼盘：{{building.name}}</div>
          <div class="address">地址：{{building.address}}</div>
          <div class="icon" :style="bg(building.img)"></div>
          <div class="button">
            <router-link :to="{ name: 'home', params: { id: building.id }}">进入</router-link>
          </div>
        </div>
        <app-split/>
      </div>
    </div>
    <div class="tip" v-else>您还没有关注楼盘，请扫描销售经理推荐的二维码进行关注。</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Split from '../tool/Split'
import {  MessageBox,Toast } from 'mint-ui'
export default {
  name: 'MyBuilding',
  data () {
    return {
      buildings:[
          {
            id:"abc",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1540013896&di=2971c471b182159d5591f5d75878ba81&src=http://pic.qiantucdn.com/58pic/18/11/53/55d55f9b386e6_1024.jpg"
          },{
            id:"abcd",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540024011491&di=df87275aa01b89bd64614bb1345a5a11&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fphotoblog%2F6%2F9%2F2%2F5%2F6925974%2F200912%2F7%2F1260179083464.jpg"
          }
      ]
    }
  },
  methods:{
    bg(imgName){
      return "background-image: url(" + imgName + ");"
    },
    initScroll(){
      this.$nextTick(() => {
        if(!this.scroll){
          this.scroll = new BScroll(this.$refs.myBuilding,{
            click:true
          })
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
          this.buildings.splice(index,1)
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
    }
  },
  components:{
    "app-split":Split
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myBuilding{
	position: fixed;
	left: 0;
	top: 40px;
	bottom: 2.75rem /* 55/20 */;
	background: white;
	width: 100%;
	z-index: 1;
}
.myBuilding .building .building-content{
  padding: 12px;
}
.myBuilding .building .building-content .name{
  font-size: .9rem /* 18/20 */;
  font-weight: bold;
  margin-bottom: .6rem /* 12/20 */;
  color: inherit;
  background-color: inherit
}
.myBuilding .building .building-content .address{
  font-size: .7rem /* 14/20 */;
  line-height: 1rem /* 20/20 */;
  margin-bottom: .3rem /* 6/20 */;
  color: inherit;
  background-color: inherit;
}
.myBuilding .building .building-content .button{
  margin-top: .6rem /* 12/20 */;
  color: #5a5a5a;
}
.myBuilding .building .building-content .button a{
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
.building .icon{
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
.building-content .collect{
  width: 1.5rem /* 30/20 */;
  height: 1.5rem /* 30/20 */;
  color: #ffd161;
  position: absolute;
  padding: .05rem /* 1/20 */;
  right: .6rem /* 12/20 */;
}
.building-content .collect .bg{
    background: #1E81D2;
    background-image: url(../house/img/collect.png);
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
</style>