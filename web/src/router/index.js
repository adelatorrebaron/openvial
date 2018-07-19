import Vue from 'vue'
import Router from 'vue-router'
import Principal from '@/components/frontend/Principal'

import Login from '@/components/auth/Login'
import Logout from '@/components/auth/Logout'
import UsuarioPerfil from '@/components/backend/UsuarioPerfil'

import Dashboard from '@/components/backend/Dashboard'
import Autoescuela from '@/components/backend/Autoescuela'
import Profesores from '@/components/backend/Profesores'
import Cursos from '@/components/backend/Cursos'
import Alumnos from '@/components/backend/Alumnos'
import Pagos from '@/components/backend/Pagos'
import Vehiculos from '@/components/backend/Vehiculos'
import Clases from '@/components/backend/Clases'

import InformeAutoescuela from '@/components/backend/informes/Autoescuela'
import InformeProfesores from '@/components/backend/informes/Profesores'
import InformeCursos from '@/components/backend/informes/Cursos'
import InformeAlumnos from '@/components/backend/informes/Alumnos'
import InformePagos from '@/components/backend/informes/Pagos'
import InformeVehiculos from '@/components/backend/informes/Vehiculos'
import InformeClases from '@/components/backend/informes/Clases'



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
      path: '/usuario/perfil',
      name: 'UsuarioPerfil',
      component: UsuarioPerfil
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/autoescuela',
      name: 'Autoescuela',
      component: Autoescuela
    },
    {
      path: '/dashboard/profesores',
      name: 'Profesores',
      component: Profesores
    },
    {
      path: '/dashboard/cursos',
      name: 'Cursos',
      component: Cursos
    },
    {
      path: '/dashboard/alumnos',
      name: 'Alumnos',
      component: Alumnos
    },
    {
      path: '/dashboard/pagos',
      name: 'Pagos',
      component: Pagos
    },
    {
      path: '/dashboard/vehiculos',
      name: 'Vehiculos',
      component: Vehiculos
    },
    {
      path: '/dashboard/clases',
      name: 'Clases',
      component: Clases
    },
    {
      path: '/dashboard/informes/autoescuela',
      name: 'InformeAutoescuela',
      component: InformeAutoescuela
    },
    {
      path: '/dashboard/informes/profesores',
      name: 'InformeProfesores',
      component: InformeProfesores
    },
    {
      path: '/dashboard/informes/cursos',
      name: 'InformeCursos',
      component: InformeCursos
    },
    {
      path: '/dashboard/informes/alumnos',
      name: 'InformeAlumnos',
      component: InformeAlumnos
    },
    {
      path: '/dashboard/informes/pagos',
      name: 'InformePagos',
      component: InformePagos
    },
    {
      path: '/dashboard/informes/vehiculos',
      name: 'InformeVehiculos',
      component: InformeVehiculos
    },
    {
      path: '/dashboard/informes/clases',
      name: 'InformeClases',
      component: InformeClases
    }
  ]
})
