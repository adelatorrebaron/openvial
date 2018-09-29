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
      <autoescuela-welcome-message v-on:onClicked="showAutoescuelaCreateForm = true"></autoescuela-welcome-message>

    </div>
    <!-- Pantalla de presentacion para cumplimentar el Perfil -->
    <perfil-welcome-message  v-on:onClicked="showPerfilCreateForm = true"></perfil-welcome-message>

    <!-- Formulario para crear la Autoescuela -->
    <autoescuela-create-form
      v-bind:show="showAutoescuelaCreateForm"
      @onClosed="showAutoescuelaCreateForm = false"
      v-on:onClosed="onClosed('Cerrado el formulario de creación de la Autoescuela')">
    </autoescuela-create-form>

    <!-- Formulario para crear e introducir el Perfil del usuario -->
    <perfil-create-form
      v-bind:show="showPerfilCreateForm"
      @onClosed="showPerfilCreateForm = false"
      v-on:onClosed="onClosed('Cerrado el formulario de creación de perfil')">      
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
      showAutoescuelaCreateForm: false,
      showPerfilCreateForm: false,
    }
  },

  computed: {
    ...mapGetters({ isUserLogged: 'isUserLogged'}),
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
        // Si el usuario está logeado y la autoescuela no existe la cargo la leo
        if (this.isUserLogged && !this.existAutoescuela){
          this.$store.dispatch('loadAutoescuela', this.$store.state.authorization.user.id)
        }
    },
    onClosed(mensaje) {
      console.log(mensaje)
    },
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>