import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/botnav'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      // 路由的懒加载，对于非首屏显示的页面组件通过这种方式加载，能够提高页面的加载速度
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
    {
      path: '/botnav',
      component: () => import('./views/Botnav.vue'),
      children: [
        {
          path: '',
          redirect: '/botnav/index'
        },
        {
          // 嵌套路由不需要加"/"
          path: 'index',
          name: 'index',
          component: () => import('./views/Index.vue')
        },
        {
          // 嵌套路由不需要加"/"
          path: 'list',
          name: 'list',
          component: () => import('./views/List.vue')
        },
        {
          // 嵌套路由不需要加"/"
          path: 'search',
          name: 'search',
          component: () => import('./views/Search.vue')
        },
        {
          // 嵌套路由不需要加"/"
          path: 'cart',
          name: 'cart',
          meta: {
            requireAuth: true // 该路由访问需要登录权限
          },
          component: () => import('./views/Cart.vue')
        },
        {
          // 嵌套路由不需要加"/"
          path: 'Mine',
          name: 'mine',
          meta: {
            requireAuth: true
          },
          component: () => import('./views/Mine.vue')
        },
      ]
    }
  ]
})
