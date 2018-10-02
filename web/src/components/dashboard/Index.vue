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
    <!-- Pantalla de presentacion para cumplimentar el Perfil -->
    <!--
    <perfil-welcome-message  v-on:onClicked="showPerfilCreateForm = true"></perfil-welcome-message>
    -->

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
      ventanaTitulo: 'Dashboard',
      autoescuelaFormShow: false,
      autoescuelaFormTitle: 'Creación de la Autoescuela',
      autoescuelaFormAction: 'create',
      autoescuela: {
        _id: '',
        usuario_id: '5ba4d317bf45010012952d5f',
        denominacion: 'Autoescuela Odisea 18asd',
        numero_provincial: 'GR03918',
        seccion: '18',
        digito_control: '18',
        numero_secuencial: '18',
        direccion: {
          via: {
            tipo: 'Avenida',
            nombre: 'Los solecillos',
            numero: '18',
            bloque: 'Los Almendros',
            portal: '18',
            escalera: '18',
            planta: '18ª',
            puerta: '18C',
            kilometro: '18'
          },
          codigo_postal: '18180',
          poblacion: 'Alfacar',
          provincia: 'Granada',
          pais: 'España'
        },
        contacto: {
          telefono_fijo: '958540562',
          telefono_movil: '636244362',
          whatsapp: '636244362',
          email: 'alejandrodelatorrebaron18@gmail.com',
          website: 'www.autoescuelaodisea.com',
          facebook: 'mifaceboo.com',
          twitter: 'mituiter.com'
        },
        estado: true
      },

//      showPerfilCreateForm: false,
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