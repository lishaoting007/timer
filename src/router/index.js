import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/login',
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
          component: () => import('@/views/statistics'),
          meta: {
            title: '统计'
          }
        },

        {
          path: '/todoGather',
          name: 'todoGather',
          component: () => import('@/views/todo-gather'),
          meta: {
            title: '待办集'
          }
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
      path: '/userMsg',
      name: 'userMsg',
      component: () => import('@/views/person/userMsg')
    },
    {
      path: '/changeName',
      name: 'changeName',
      component: () => import('@/views/person/changeMsg/changeName')
    },
    {
      path: '/changeDesc',
      name: 'changeDesc',
      component: () => import('@/views/person/changeMsg/changeDesc')
    },
    {
      path: '/changePsd',
      name: 'changePsd',
      component: () => import('@/views/person/changeMsg/changePsd')
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import('@/views/person/rankingList')
    },
    {
      path: '/calendar2',
      name: 'calendar2',
      component: () => import('@/views/calendar/index2.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test/test.vue')
    },
    {
      path: '/future',
      name: 'future',
      component: () => import('@/views/calendar-future/index.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/calendar/index.vue')
    },
    {
      path: '/plan',
      name: 'plan',
      component: () => import('@/views/future-plan/index.vue')
    }
  ]
})

export default router
