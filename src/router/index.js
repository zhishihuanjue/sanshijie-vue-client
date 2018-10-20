import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
// import Nav from '@/components/nav/Nav'
// import PersonalCenter from '@/components/personalCenter/PersonalCenter'
// import Login from '@/components/personalCenter/Login'
// import LoginRegister from '@/components/personalCenter/LoginRegister'
// import Setting from '@/components/personalCenter/Setting'
// import Code from '@/components/personalCenter/Code'
// import MyBuilding from '@/components/personalCenter/MyBuilding'

// import Nav from '@/components/nav/Nav'
import MyNav from '@/components/nav/MyNav'
import Home from '@/components/home/Home'
import Sandboxie from '@/components/sandboxie/Sandboxie'
import House from '@/components/house/House'
import Book from '@/components/book/Book'
import PersonalCenter from '@/components/personalCenter/PersonalCenter'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:"/home/sanshijie"
    },
    { path: '/', component: MyNav,
      children: [
        {
          // 当 /myNav/home 匹配成功，
          // home 会被渲染在 nav 的 <router-view> 中
          name: 'home',
          path: 'home/:id',
          component: Home
        },
        {
          path: 'Sandboxie',
          component: Sandboxie
        },
        {
          path: 'house',
          component: House
        },
        {
          path: 'book',
          component: Book
        },
        {
          path: 'personalCenter',
          component: PersonalCenter
        },
      ]
    },
    /* {
      path: '/nav',
      component: Nav
    }, 
    {
      path: '/myNav',
      component: MyNav
    }, */
    /* {
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
      component: Login,
      // component: resolve => require(['@/components/personalCenter/Login'],resolve)
    },
    {
      path: '/loginRegister',
      component: LoginRegister
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/code',
      component: Code
    },
    {
      path: '/myBuilding',
      component: MyBuilding
    }, */
  ]
})
