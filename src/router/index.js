import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/nav/Nav'
import PersonalCenter from '@/components/personalCenter/PersonalCenter'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Nav,
      redirect:"/nav"
    },
    {
      path: '/nav',
      component: Nav
    },    
    {
      path: '/personalCenter',
      component: PersonalCenter
    },
  ]
})
