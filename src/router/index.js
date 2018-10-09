import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/nav/Nav'
import PersonalCenter from '@/components/personalCenter/PersonalCenter'
import Login from '@/components/personalCenter/Login'
import LoginRegister from '@/components/personalCenter/LoginRegister'
import Setting from '@/components/personalCenter/Setting'


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
    {
      path: '/login',
      component: Login
    },
    {
      path: '/loginRegister',
      component: LoginRegister
    },
    {
      path: '/setting',
      component: Setting
    },
  ]
})
