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
      <autoescuela-welcome-message v-on:onClicked="showAutoescuelaModalForm()"></autoescuela-welcome-message>
    </div>
    <!-- Pantalla de presentacion para cumplimentar el Perfil -->
    <!--
    <perfil-welcome-message  v-on:onClicked="showPerfilCreateForm = true"></perfil-welcome-message>
    -->

    <!-- Formulario para crear la Autoescuela -->
    <autoescuela-modal-form
      v-bind:show="autoescuelaFormShow"
      v-bind:title="autoescuelaFormTitle"
      v-on:onClosed="onClosed('Cerrado el formulario de creación de la Autoescuela')" 
      v-on:onCanceled="onCanceled('Cancelado el formulario de creación de la Autoescuela')" 
      v-on:onAccepted="onAccepted('Aceptado el formulario de creación de la Autoescuela')">
    </autoescuela-modal-form>

    <!-- Formulario para crear e introducir el Perfil del usuario -->
    <!--
    <perfil-create-form
      v-bind:show="showPerfilCreateForm"
      @onClosed="showPerfilCreateForm = false"
      v-on:onClosed="onClosed('Cerrado el formulario de creación de perfil')">      
    </perfil-create-form>
    -->

  </div>

</template>


<script>
import autoescuelaWelcomeMessage    from '@/components/autoescuela/autoescuela-welcome-message'
import autoescuelaModalForm         from '@/components/autoescuela/autoescuela-modal-form'
import { mapGetters }               from 'vuex'
//import perfilWelcomeMessage         from '@/components/perfil/perfil-welcome-message'
//import perfilCreateForm             from '@/components/perfil/perfil-create-modal-form'

export default {
  name: 'dashboard',
  components: {
     'autoescuela-welcome-message': autoescuelaWelcomeMessage,
     'autoescuela-modal-form':      autoescuelaModalForm,
//     'perfil-welcome-message':      perfilWelcomeMessage,
//     'perfil-create-form':          perfilCreateForm,
  },

  data () {
    return {
      titulo: 'Dashboard',
      autoescuelaFormShow: false,
      autoescuelaFormTitle: 'Creación de la Autoescuela',
//      showPerfilCreateForm: false,
    }
  },

  computed: {
    ...mapGetters({ isUserLogged: 'isUserLogged'}),
    ...mapGetters({ existAutoescuela: 'existAutoescuela'})
  },

  created () {
    this.loadAutoescuelaData()
  },

  updated () {
    this.loadAutoescuelaData()
  },

  methods: {
    loadAutoescuelaData() {
        // Si el usuario está logeado y la autoescuela no existe la cargo la leo
        if (this.isUserLogged && !this.existAutoescuela){
          this.$store.dispatch('loadAutoescuela', this.$store.state.authorization.user.id)
        }
    },
    showAutoescuelaModalForm(){
      // Muestro el formulario
      this.autoescuelaFormShow = true
    },
    onClosed(mensaje) {
      // Cierro el formulario
      this.autoescuelaFormShow = false
      console.log(mensaje)
    },
    onCanceled(mensaje){
      // Cierro el formulario
      this.autoescuelaFormShow = false
      console.log(mensaje)
    },
    onAccepted(mensaje){
      // Cierro el formulario
      this.autoescuelaFormShow = false
      console.log(mensaje)
    }
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>