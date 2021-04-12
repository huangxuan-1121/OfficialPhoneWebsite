import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home')
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: () => import('../pages/Introduce')
    },
    {
      path: '/group',
      name: 'group',
      component: () => import('../pages/Group')
    },
    {
      path: '/show',
      name: 'Show',
      component: () => import('../pages/Show')
    }
  ],
})
