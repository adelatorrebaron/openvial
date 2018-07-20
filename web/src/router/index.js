import Vue from 'vue'
import Router from 'vue-router'
import Principal from '@/components/frontend/Principal'

import AutenticacionLogin from '@/components/autenticacion/Login'
import AutenticacionLogout from '@/components/autenticacion/Logout'

import UsuarioPerfil from '@/components/usuario/Perfil'

import DashboardIndex from '@/components/dashboard/Index'

import AutoescuelaIndex from '@/components/autoescuela/Index'

import ProfesoresIndex from '@/components/profesores/Index'

import CursosIndex from '@/components/cursos/Index'

import AlumnosIndex from '@/components/alumnos/Index'

import PagosIndex from '@/components/pagos/Index'

import VehiculosIndex from '@/components/vehiculos/Index'

import ClasesIndex from '@/components/clases/Index'

import InformesAutoescuelaIndex from '@/components/informes/autoescuela/Index'

import InformesProfesoresIndex from '@/components/informes/profesores/Index'

import InformesCursosIndex from '@/components/informes/cursos/Index'

import InformesAlumnosIndex from '@/components/informes/alumnos/Index'

import InformesPagosIndex from '@/components/informes/pagos/Index'

import InformesVehiculosIndex from '@/components/informes/vehiculos/Index'

import InformesClasesIndex from '@/components/informes/clases/Index'



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
      name: 'AutenticacionLogin',
      component: AutenticacionLogin
    },
    {
      path: '/logout',
      name: 'AutenticacionLogout',
      component: AutenticacionLogout
    },
    {
      path: '/usuario/perfil',
      name: 'UsuarioPerfil',
      component: UsuarioPerfil
    },
    {
      path: '/dashboard',
      name: 'DashboardIndex',
      component: DashboardIndex
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
