import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/nav/Nav'
import Home from '@/components/home/Home'
import Sandboxie from '@/components/sandboxie/Sandboxie'
import House from '@/components/house/House'
import Book from '@/components/book/Book'
import PersonalCenter from '@/components/personalCenter/PersonalCenter'
import Nofind from '@/components/404/404'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: "/home/sanshijie"
    },
    {
      path: '/',
      component: Nav,
      children: [{
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
    }, {
      path: '*',
      name: '/404',
      component: Nofind
    },
  ]
});

// 添加路由守卫
router.beforeEach((to, from, next) => {
  // const isLogin = localStorage.eleToken ? true : false;
  // if (to.path == "/login" || to.path == "/register") {
  //   next();
  // } else {
  //   isLogin ? next() : next("/login");
  // }
  next()
})

export default router;
