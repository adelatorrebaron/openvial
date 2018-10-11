<template>
  <div class="dashboard">
    <div v-if="existAutoescuela === true">
       <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>{{ventanaTitulo}}</h1>
        <ol class="breadcrumb">
          <li>
            <router-link to="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</router-link>
          </li>
        </ol>
      </section>
      <section class="content">
        <div class="row">
          <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-aqua">
              <div class="inner">
                <h3>150</h3>

                <p>Alumnos</p>
              </div>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-green">
              <div class="inner">
                <h3>53<sup style="font-size: 20px">%</sup></h3>

                <p>Bounce Rate</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-yellow">
              <div class="inner">
                <h3>44</h3>

                <p>User Registrations</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-red">
              <div class="inner">
                <h3>65</h3>

                <p>Unique Visitors</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
        </div>
      </section>
    </div>
    <div v-else>
      <!-- Pantalla de presentacion para crear el Centro de Formación Vial -->
      <autoescuela-welcome-message v-on:onClicked="showAutoescuelaModalForm()"></autoescuela-welcome-message>
    </div>

    <!-- Formulario para crear la Autoescuela -->
    <autoescuela-modal-form
      v-bind:show="autoescuelaFormShow"
      v-bind:title="autoescuelaFormTitle"
      v-bind:action="autoescuelaFormAction"
      v-bind:autoescuela="autoescuela"
      v-on:onClosed="onClosedAutoescuelaModalForm('Cerrado el formulario de creación de la Autoescuela')" 
      v-on:onCanceled="onCanceledAutoescuelaModalForm('Cancelado el formulario de creación de la Autoescuela')" 
      v-on:onAccepted="onAcceptedAutoescuelaModalForm('Aceptado el formulario de creación de la Autoescuela')">
    </autoescuela-modal-form>

  </div>

</template>


<script>
import autoescuelaWelcomeMessage    from '@/components/autoescuela/autoescuela-welcome-message'
import autoescuelaModalForm         from '@/components/autoescuela/autoescuela-modal-form'
import { mapGetters }               from 'vuex'

export default {
  name: 'dashboard',
  components: {
     'autoescuela-welcome-message': autoescuelaWelcomeMessage,
     'autoescuela-modal-form':      autoescuelaModalForm,
  },

  data () {
    return {
      ventanaTitulo: 'Dashboard',
      autoescuelaFormShow: false,
      autoescuelaFormTitle: 'Creación de la Autoescuela',
      autoescuelaFormAction: 'create',
      autoescuela: {
        _id: '',
        usuario_id: '',
        denominacion: '',
        numero_provincial: '',
        seccion: '',
        digito_control: '',
        numero_secuencial: '',
        direccion: {
          via: {
            tipo: '',
            nombre: '',
            numero: '',
            bloque: '',
            portal: '',
            escalera: '',
            planta: '',
            puerta: '',
            kilometro: ''
          },
          codigo_postal: '',
          poblacion: '',
          provincia: '',
          pais: ''
        },
        contacto: {
          telefono_fijo: '',
          telefono_movil: '',
          whatsapp: '',
          email: '',
          website: '',
          facebook: '',
          twitter: ''
        },
        estado: true
      },
    }
  },

  computed: {
    ...mapGetters({ isUserLogged: 'isUserLogged'}),
    ...mapGetters({ existAutoescuela: 'existAutoescuela'}),
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
          this.$store.dispatch('loadAutoescuela', this.$store.state.authorization.user._id)
        }
    },
    showAutoescuelaModalForm(){
      // Muestro el formulario
      this.autoescuelaFormShow = true
    },
    onClosedAutoescuelaModalForm(mensaje) {
      // Cierro el formulario
      this.autoescuelaFormShow = false
    },
    onCanceledAutoescuelaModalForm(mensaje){
      // Cierro el formulario
      this.autoescuelaFormShow = false
    },
    onAcceptedAutoescuelaModalForm(mensaje){
      // Cierro el formulario
      this.autoescuelaFormShow = false
    }
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>