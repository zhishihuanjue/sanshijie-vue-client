<template>
  <div class="myBuilding">
    <mt-cell v-for="building in buildings" :title="building.name" :key="building.id">
      <img :src="building.img" alt="">
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'MyBuilding',
  data () {
    return {
      buildings:[
          {
            id:"abc",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"../../assets/logo.jpg"
          },{
            id:"abc",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"../../assets/logo.jpg"
          },{
            id:"abc",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"../../assets/logo.jpg"
          },{
            id:"abc",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"../../assets/logo.jpg"
          },{
            id:"abc",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"../../assets/logo.jpg"
          },{
            id:"abc",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"../../assets/logo.jpg"
          },{
            id:"abc",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"../../assets/logo.jpg"
          },{
            id:"abc",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"../../assets/logo.jpg"
          },{
            id:"abc",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"../../assets/logo.jpg"
          },{
            id:"abc",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"../../assets/logo.jpg"
          },{
            id:"abc",
            name:"东华小区",
            address:"昆明市盘龙区康庄大道中段",
            img:"../../assets/logo.jpg"
          },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
