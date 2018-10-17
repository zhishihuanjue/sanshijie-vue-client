<template>
  <div class="page-tabbar">
    <div class="page-wrap">
        <!-- <div class="page-title">
            Tabbar
        </div>
        <div>
            <mt-cell class="page-part" title="当前选中" :value="selected" />
        </div> -->
        <!-- <app-personalCenterButton></app-personalCenterButton> -->
        <mt-tab-container class="page-tabbar-container" v-model="selected">
            <mt-tab-container-item id="首页">
                <app-home></app-home>
            </mt-tab-container-item>
            <mt-tab-container-item id="沙盘">
                <app-sandboxie></app-sandboxie>
            </mt-tab-container-item>
            <mt-tab-container-item id="户型">
                <app-house></app-house>
            </mt-tab-container-item>
            <mt-tab-container-item id="预约">
                <app-book></app-book>
            </mt-tab-container-item>
            <mt-tab-container-item id="我的">
                <app-personalCenter></app-personalCenter>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
 
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="../../assets/首页.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="沙盘">
        <img slot="icon" src="../../assets/沙盘.png">
        沙盘
      </mt-tab-item>
      <mt-tab-item id="户型">
        <img slot="icon" src="../../assets/户型.png">
        户型
      </mt-tab-item>
      <mt-tab-item id="预约">
        <img slot="icon" src="../../assets/预约.png">
        预约
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../assets/我的.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
 
<script>
import Home from '../home/Home'
import Sandboxie from '../sandboxie/Sandboxie'
import House from '../house/House'
import Book from '../book/Book'
// import PersonalCenterButton from '../personalCenter/PersonalCenterButton'
import PersonalCenter from '../personalCenter/PersonalCenter'

export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '首页'
    };
  },
  components:{
      "app-home":Home,
      "app-sandboxie":Sandboxie,
      "app-house":House,
      "app-book":Book,
      // "app-personalCenterButton":PersonalCenterButton,
      "app-personalCenter":PersonalCenter
  }
};
</script>
 
<style scoped>
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 55px;
  }
</style>