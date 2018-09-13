import Vue from 'vue'
import Router from 'vue-router'


import Inicio from '@/components/frontend/Inicio'

import UsuarioRegister from '@/components/comun/usuario/Register'
import UsuarioLogin from '@/components/comun/usuario/Login'
import UsuarioLogout from '@/components/comun/usuario/Logout'
import UsuarioProfile from '@/components/comun/usuario/Profile'


import DashboardIndex from '@/components/backend/dashboard/Index'
import DashboardBienvenida from '@/components/backend/dashboard/Bienvenida'

import AutoescuelaIndex from '@/components/backend/autoescuela/Index'

import ProfesoresIndex from '@/components/backend/profesores/Index'

import CursosIndex from '@/components/backend/cursos/Index'

import AlumnosIndex from '@/components/backend/alumnos/Index'

import PagosIndex from '@/components/backend/pagos/Index'

import VehiculosIndex from '@/components/backend/vehiculos/Index'

import ClasesIndex from '@/components/backend/clases/Index'

import InformesAutoescuelaIndex from '@/components/backend/informes/autoescuela/Index'

import InformesProfesoresIndex from '@/components/backend/informes/profesores/Index'

import InformesCursosIndex from '@/components/backend/informes/cursos/Index'

import InformesAlumnosIndex from '@/components/backend/informes/alumnos/Index'

import InformesPagosIndex from '@/components/backend/informes/pagos/Index'

import InformesVehiculosIndex from '@/components/backend/informes/vehiculos/Index'

import InformesClasesIndex from '@/components/backend/informes/clases/Index'


Vue.use(Router)

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
      component: UsuarioLogin
    },
    {
      path: '/usuario/logout',
      name: 'UsuarioLogout',
      component: UsuarioLogout
    },
    {
      path: '/usuario/perfil',
      name: 'UsuarioProfile',
      component: UsuarioProfile
    },
    {
      path: '/dashboard',
      name: 'DashboardIndex',
      component: DashboardIndex
    },
    {
      path: '/bienvenida',
      name: 'DashboardBienvenida',
      component: DashboardBienvenida
    },
    {
      path: '/autoescuela',
      name: 'AutoescuelaIndex',
      component: AutoescuelaIndex
    },
    {
      path: '/profesores',
      name: 'ProfesoresIndex',
      component: ProfesoresIndex
    },
    {
      path: '/cursos',
      name: 'CursosIndex',
      component: CursosIndex
    },
    {
      path: '/alumnos',
      name: 'AlumnosIndex',
      component: AlumnosIndex
    },
    {
      path: '/pagos',
      name: 'PagosIndex',
      component: PagosIndex
    },
    {
      path: '/vehiculos',
      name: 'VehiculosIndex',
      component: VehiculosIndex
    },
    {
      path: '/clases',
      name: 'ClasesIndex',
      component: ClasesIndex
    },
    {
      path: '/informes/autoescuela',
      name: 'InformesAutoescuelaIndex',
      component: InformesAutoescuelaIndex
    },
    {
      path: '/informes/profesores',
      name: 'InformesProfesoresIndex',
      component: InformesProfesoresIndex
    },
    {
      path: '/informes/cursos',
      name: 'InformesCursosIndex',
      component: InformesCursosIndex
    },
    {
      path: '/informes/alumnos',
      name: 'InformesAlumnosIndex',
      component: InformesAlumnosIndex
    },
    {
      path: '/informes/pagos',
      name: 'InformesPagosIndex',
      component: InformesPagosIndex
    },
    {
      path: '/informes/vehiculos',
      name: 'InformesVehiculosIndex',
      component: InformesVehiculosIndex
    },
    {
      path: '/informes/clases',
      name: 'InformesClasesIndex',
      component: InformesClasesIndex
    }
  ]
})
