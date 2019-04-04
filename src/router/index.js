import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'layout',
    redirect: '/index',
    component: () => import('@/views/layout'),
    children: [{
      path: 'index',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/index')
    }]
  },
  {
    path: '/countdown',
    name: 'countdown',
    component: () => import('@/views/countdown')
  },
  {
    path: '/123',
    name: '123',
    component: () => import('@/views/countdown/components/index.vue')
  }
  ]
})

export default router
