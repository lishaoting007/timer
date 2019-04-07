import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/index',
      component: () => import('@/views/layout'),
      children: [
        {
          path: 'index',
          name: 'index',
          meta: {
            title: '首页'
          },
          component: () => import('@/views/index')
        },
        {
          path: 'person',
          name: 'person',
          component: () => import('@/views/person'),
          meta: {
            title: '个人中心'
          }
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: () => import('@/views/statistics')
        }
      ]
    },
    {
      path: '/countdown/:id',
      name: 'countdown',
      component: () => import('@/views/countdown')
    },
    {
      path: '/123',
      name: '123',
      component: () => import('@/views/statistics/components/dataPage.vue')
    },
    {
      path: '/111',
      name: '111',
      component: () => import('@/views/test')
    }
  ]
})

export default router
