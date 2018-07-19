import Vue from 'vue'
import Router from 'vue-router'
import Principal from '@/components/frontend/Principal'
import Login from '@/components/auth/Login'
import Logout from '@/components/auth/Logout'
import Dashboard from '@/components/backend/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: Principal
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
