<template>
  <div class="book">
    <app-header title="预约"></app-header>
    <div class="book-content">
      <h3>联系我们</h3>
      <p>
        可以通过预约看房来填写相关信息，稍后售楼人员会和您取得联系。
      </p>
      <p>
        我们欢迎您直接拨打下方联系电话，预约咨询。
      </p>
      <h4 class="name">{{name}}</h4>
      <p class="contacts">{{contacts}}</p>
      <p class="tel">{{tel}}</p>
      <mt-field label="姓名" placeholder="请输入姓名" v-model="clientName"></mt-field>
      <mt-field label="联系电话" placeholder="请输入联系电话" type="number" v-model="clientTel"></mt-field>
      <mt-field label="预约信息" placeholder="请输入您关注的户型等其他信息" type="textarea" rows="4" v-model="introduction"></mt-field>
      <mt-button type="default" plain size="large" @click.stop.prevent="book">预约</mt-button>
    </div>
  </div>
</template>

<script>
import Header from '../header/Header'
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
    "app-header":Header
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

</style>
