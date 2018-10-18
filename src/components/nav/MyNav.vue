<template>
  <div class="page-tabbar">
    <div class="page-wrap">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
 
    <div class="tabbar">
        <router-link v-for="(tabbar,index) in tabbars" :key="index" :to="tabbar.to" class="tab-item">
            <div class="tab-item-icon" :style="{ 'background-image':'url('+tabbar.src+')'}"></div>
            <div class="tab-item-lable">
                {{tabbar.title}}
            </div>
        </router-link>
    </div>
  </div>
</template>
 
<script>

export default {
  name: 'page-tabbar',
  data() {
    return {
        tabbars:[
            {
                title:'首页',
                to:'/myNav/home',
                src:'../../../static/images/首页.png',
            },
            {
                title:'沙盘',
                to:'/myNav/sandboxie',
                src:'../../../static/images/沙盘.png',
            },
            {
                title:'户型',
                to:'/myNav/house',
                src:'../../../static/images/户型.png',
            },
            {
                title:'预约',
                to:'/myNav/book',
                src:'../../../static/images/预约.png',
            },
            {
                title:'我的',
                to:'/myNav/personalCenter',
                src:'../../../static/images/我的.png',
            },
        ]
    };
  },
  methods:{
      toggle(index){
          console.log(index)
          this.tabbars.forEach(()=>{})
          this.tabbars[index]
      }
  }
};
</script>
 
<style scoped>
.page-tabbar .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 55px;
}
.page-tabbar .tabbar{
    background-image: -webkit-gradient(linear, left top, left bottom, from(#F0F0F0), color-stop(50%, transparent));
    background-image: linear-gradient(0deg, #F0F0F0,transparent 50%);
    background-size: 100% 2px;
    background-repeat: no-repeat;
    background-position: top left;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 1;
    color: #737373;
    background-color: #fff;
}
.tab-item{
    display: block;
    padding: 7px 0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color:rgba(255,0,0,0);
}
.tab-item.router-link-active{
    color: #1E81D2;
}
.tab-item .tab-item-icon{
    width: 24px;
    height: 24px;
    margin: 0 auto 5px;
    background-repeat:no-repeat; 
    background-attachment:"fixed";
    background-size:100% 200%;
    -moz-background-size:100% 200%;
}
.tab-item.router-link-active .tab-item-icon{
    background-position: 0 100%;
}
.tab-item .tab-item-icon > *{
    display: block;
    width: 100%;
    height: 100%;
}
.tab-item .tab-item-lable{
    color: inherit;
    font-size: 12px;
    line-height: 1;
}
</style>