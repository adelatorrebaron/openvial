<template>
  <div class="dashboard">
    <div v-if="existAutoescuela === true">
       <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>{{titulo}}</h1>
        <ol class="breadcrumb">
          <li>
            <router-link to="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</router-link>
          </li>
        </ol>
      </section>
    </div>
    <div v-else>
      <!-- Pantalla de presentacion para crear el Centro de Formación Vial -->
      <autoescuela-welcome-message v-on:click="showAutoescuelaCreateForm = true"></autoescuela-welcome-message>

    </div>
    <!-- Pantalla de presentacion para cumplimentar el Perfil -->
    <perfil-welcome-message  v-on:click="showPerfilCreateForm = true"></perfil-welcome-message>

    <!-- Formulario para crear la Autoescuela -->
    <autoescuela-create-form
      v-bind:show="showAutoescuelaCreateForm"
      @cerrar="showAutoescuelaCreateForm = false"
      v-on:cerrar="escribirEnConsola()">
    </autoescuela-create-form>

    <!-- Formulario para crear e introducir el Perfil del usuario -->
    <perfil-create-form
      v-bind:show="showPerfilCreateForm"
      @cerrar="showPerfilCreateForm = false"
      v-on:cerrar="escribirEnConsola()">      
    </perfil-create-form>


  </div>



</template>

<script>
import autoescuelaWelcomeMessage    from '@/components/backend/dashboard/autoescuela-welcome-message'
import perfilWelcomeMessage         from '@/components/backend/dashboard/perfil-welcome-message'
import autoescuelaCreateForm        from '@/components/backend/dashboard/autoescuela-create-modal-form'
import perfilCreateForm             from '@/components/backend/dashboard/perfil-create-modal-form'

import { mapGetters }               from 'vuex'


export default {
  name: 'dashboard',
  components: {
     'autoescuela-welcome-message': autoescuelaWelcomeMessage,
     'perfil-welcome-message':      perfilWelcomeMessage,
     'autoescuela-create-form':     autoescuelaCreateForm,
     'perfil-create-form':          perfilCreateForm,
  },

  data () {
    return {
      titulo: 'Dashboard',
      showAutoescuelaCreateForm: true,
      showPerfilCreateForm: true,
    }
  },

  computed: {
    ...mapGetters({ currentUser: 'currentUser'}),
    ...mapGetters({ currentAutoescuela: 'currentAutoescuela'}),
    ...mapGetters({ existAutoescuela: 'existAutoescuela'})
  },

  created () {
    this.cargarDatosAutoescuela()
  },

  updated () {
    this.cargarDatosAutoescuela()
  },

  methods: {
    cargarDatosAutoescuela() {
      if (!this.existAutoescuela)
        this.$store.dispatch('loadAutoescuela', this.currentUser)
    },
    escribirEnConsola() {
      console.log("Datos escritos desde la consola")
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.btn-circle.btn-xl {
    width: 50px;
    height: 50px;
    padding: 10px 16px;
    border-radius: 25px;
    font-size: 24px;
    line-height: 1.33;
}

.btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 1.42857;
}

.modal-body
{
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  background-color: #FFFFFF;
}

.modal-content
{
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  background-color: transparent;
}

.modal-footer
{
  background-color: #d9edf7;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  -webkit-border-bottom-left-radius: 6px;
  -webkit-border-bottom-right-radius: 6px;
  -moz-border-radius-bottomleft: 6px;
  -moz-border-radius-bottomright: 6px;
}

.modal-header
{
  background-color: #337ab7;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  -webkit-border-top-left-radius: 6px;
  -webkit-border-top-right-radius: 6px;
  -moz-border-radius-topleft: 6px;
  -moz-border-radius-topright: 6px;
}

.noresize {
  resize: none; 
}
</style>