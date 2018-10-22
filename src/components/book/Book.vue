<template>
  <div class="book">
    <app-header title="预约"></app-header>
    <div class="book-content">
      <div class="title">
        <h3>联系我们</h3>
        <p>
          可以通过预约看房来填写相关信息，稍后售楼人员会和您取得联系。
        </p>
        <p>
          我们欢迎您直接拨打下方联系电话，预约咨询。
        </p>
      </div>
      <app-split></app-split>
      <div class="company">
        <h4 class="name">{{name}}</h4>
        <p class="contacts">销售经理：{{contacts}}</p>
        <p class="tel">联系电话：{{tel}}</p>
      </div>
      <app-split></app-split>
      <form class="form" method="get">
        <mt-field label="姓名" placeholder="请输入姓名" v-model="clientName"></mt-field>
        <mt-field label="联系电话" placeholder="请输入联系电话" type="number" v-model="clientTel"></mt-field>
        <mt-field label="预约信息" placeholder="请输入您关注的户型等其他信息" type="textarea" rows="4" v-model="introduction"></mt-field>
        <mt-button type="default" plain size="large" @click.stop.prevent="book">预约</mt-button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from '../header/Header'
import Split from '../tool/Split'
import { Toast } from 'mint-ui'
export default {
  name: 'Book',
  data () {
    return {
      clientName:"",
      clientTel:"",
      introduction:""
    }
  },
  props:{
    name:{
      type:String,
      default:"三视界"
    },
    contacts:{
      type:String,
      default:"赵一波"
    },
    tel:{
      type:String,
      default:"18213917293"
    }
  },
  components:{
    "app-header":Header,
    "app-split":Split
  },
  methods:{
    book(){
      //预约
      Toast({
        message: '预约成功，稍后销售经理会联系您，请注意接听电话',
        duration: 2000
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book{
  color: #000;
  background-color: #fff;
}
.book-content .title,
.book-content .company,
.book-content .form{
  padding: .3rem /* 6/20 */ .6rem /* 12/20 */;
}
.book-content h3{
  font-size: .9rem /* 18/20 */;
  font-weight: bold;
  margin-bottom: .3rem /* 6/20 */;
  color: inherit;
  background-color: inherit;
}
.book-content p{
  font-size: .7rem /* 14/20 */;
  line-height: 1rem /* 20/20 */;
  text-indent: 1.4rem /* 28/20 */;
  color: inherit;
  background-color: inherit;
}
.name,
.contacts,
.tel{
  font-size: .8rem /* 16/20 */;
  margin: .6rem /* 12/20 */ 0 .3rem /* 6/20 */ 0;
}
.name{
  font-weight: bold;
}
.book-content .contacts,
.book-content .tel{
  color: #f10010;
}
</style>
