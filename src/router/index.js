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
      path: '/countdown',
      name: 'countdown',
      component: () => import('@/views/countdown')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register')
    },
    {
      path: '/111',
      name: '111',
      component: () => import('@/views/login/test.vue')
    },
    {
      path: '/222',
      name: '222',
      component: () => import('@/views/register/test.vue')
    },
    {
      path: '/333',
      name: '333',
      component: () => import('@/views/person/components/test.vue')
    }
  ]
})

export default router
