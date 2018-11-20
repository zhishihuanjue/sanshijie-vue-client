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
                to:'/home/74692632-62d7-49de-995c-e828e1f39857',
                src:'../../../static/images/首页.png',
            },
            {
                title:'沙盘',
                to:'/sandboxie',
                src:'../../../static/images/沙盘.png',
            },
            {
                title:'户型',
                to:'/house',
                src:'../../../static/images/户型.png',
            },
            {
                title:'预约',
                to:'/book',
                src:'../../../static/images/预约.png',
            },
            {
                title:'我的',
                to:'/personalCenter',
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
    padding: 40px 0 55px 0;
}
.page-tabbar .tabbar{
    background-image: -webkit-gradient(linear, left top, left bottom, from(#F0F0F0), color-stop(50%, transparent));
    background-image: linear-gradient(0deg, #F0F0F0,transparent 50%);
    background-size: 100% 2px;
    background-repeat: no-repeat;
    background-position: top left;
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
    padding: .35rem /* 7/20 */ 0;
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
    width: 1.2rem /* 24/20 */;
    height: 1.2rem /* 24/20 */;
    margin: 0 auto .25rem /* 5/20 */;
    background-repeat:no-repeat; 
    background-attachment:"fixed";
    background-size:100% 200%;
    -moz-background-size:100% 200%;
    animation:mymove1 .2s;
    animation-timing-function:ease;

    /* Safari and Chrome */
    -webkit-animation:mymove1 .2s;
    -webkit-animation-timing-function:ease;
}
.tab-item.router-link-active .tab-item-icon{
    background-position: 0 100%;
    animation:mymove .2s;
    animation-timing-function:ease;

    /* Safari and Chrome */
    -webkit-animation:mymove .2s;
    -webkit-animation-timing-function:ease;
}

@keyframes mymove
{
    from {background-position: 0 0;}
    to {background-position: 0 100%;}
}

@-webkit-keyframes mymove /* Safari and Chrome */
{
    from {background-position: 0 0;}
    to {background-position: 0 100%;}
}

@keyframes mymove1
{
    from {background-position: 0 100%;}
    to {background-position: 0 0;}
}

@-webkit-keyframes mymove1 /* Safari and Chrome */
{
    from {background-position: 0 100%;}
    to {background-position: 0 0;}
}

.tab-item .tab-item-icon > *{
    display: block;
    width: 100%;
    height: 100%;
}
.tab-item .tab-item-lable{
    color: inherit;
    font-size: .6rem /* 12/20 */;
    line-height: 1;
}
</style>