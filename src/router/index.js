import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/main',
    component: () => import('@/views/main'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/classify',
        name: 'Classify',
        component: () => import('@/views/classify'),
        meta: {
          title: '分类'
        }
      },
      {
        path: '/car',
        name: 'Car',
        component: () => import('@/views/car'),
        meta: {
          title: '购物车'
        }
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/mine'),
        meta: {
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/detail')
  },
  {
    path: '/search',
    component: () => import('@/views/search')
  },
  {
    path: '/search2',
    component: () => import('@/views/search2')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
