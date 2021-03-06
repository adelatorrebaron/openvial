import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'



import Inicio from '@/components/inicio/Index'

import UsuarioRegister from '@/components/usuario/Register'
import UsuarioLogin from '@/components/usuario/Login'
import UsuarioLogout from '@/components/usuario/Logout'

import NotFound404 from '@/components/errors/NotFound404'


import DashboardIndex from '@/components/dashboard/Index'

import AutoescuelaIndex from '@/components/autoescuela/Index'

import ProfesoresIndex from '@/components/profesores/Index'

import AlumnosIndex from '@/components/alumnos/Index'

import VehiculosIndex from '@/components/vehiculos/Index'

import ClasesPracticasIndex from '@/components/clases_practicas/Index'

/*
import InformesAutoescuelaIndex from '@/components/informes/autoescuela/Index'

import InformesProfesoresIndex from '@/components/informes/profesores/Index'

import InformesAlumnosIndex from '@/components/informes/alumnos/Index'

import InformesVehiculosIndex from '@/components/informes/vehiculos/Index'

import InformesClasesIndex from '@/components/informes/clases/Index'
*/

Vue.use(Router)


const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isUserLogged) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isUserLogged) {
    next()
    return
  }
  next('/usuario/login')
}


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/usuario/registro',
      name: 'UsuarioRegister',
      component: UsuarioRegister
    },
    {
      path: '/usuario/login',
      name: 'UsuarioLogin',
      component: UsuarioLogin,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/usuario/logout',
      name: 'UsuarioLogout',
      component: UsuarioLogout,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/dashboard',
      name: 'DashboardIndex',
      component: DashboardIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/autoescuela',
      name: 'AutoescuelaIndex',
      component: AutoescuelaIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/profesores',
      name: 'ProfesoresIndex',
      component: ProfesoresIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/alumnos',
      name: 'AlumnosIndex',
      component: AlumnosIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/vehiculos',
      name: 'VehiculosIndex',
      component: VehiculosIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/clases_practicas',
      name: 'ClasesIndex',
      component: ClasesPracticasIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '*',
      component: NotFound404
    }
  ]
})
