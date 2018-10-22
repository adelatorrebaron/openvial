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

          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
              <span class="info-box-icon bg-red"><i class="fa fa-address-card"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Profesores</span>
                <span class="info-box-number">{{ total_profesores }}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->

          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
              <span class="info-box-icon bg-aqua"><i class="fa fa-users"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Alumnos</span>
                <span class="info-box-number">{{ total_alumnos }}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->

          <!-- fix for small devices only -->
          <div class="clearfix visible-sm-block"></div>

          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
              <span class="info-box-icon bg-green"><i class="fa fa-car"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Vehículos</span>
                <span class="info-box-number">{{ total_vehiculos }}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->

          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
              <span class="info-box-icon bg-yellow"><i class="fa fa-calendar-check-o"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Clases prácticas</span>
                <span class="info-box-number">{{ total_clases_practicas }}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
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
import profesoresApi                from '@/services/api/profesores.js'
import alumnosApi                   from '@/services/api/alumnos.js'
import vehiculosApi                 from '@/services/api/vehiculos.js'
import clases_practicasApi          from '@/services/api/clases_practicas.js'

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
      total_profesores: 0,
      total_alumnos: 0,
      total_vehiculos: 0,
      total_clases_practicas: 0
    }
  },

  computed: {
    ...mapGetters({ isUserLogged: 'isUserLogged'}),
    ...mapGetters({ existAutoescuela: 'existAutoescuela'}),
  },

  created () {
    this.loadAutoescuelaData()
     if (this.isUserLogged && this.existAutoescuela){
      this.getTotalProfesores()
      this.getTotalAlumnos()
      this.getTotalVehiculos()
      this.getClasesPracticas()
     }
  },

  updated () {
    this.loadAutoescuelaData()
    if (this.isUserLogged && this.existAutoescuela){
      this.getTotalProfesores()
      this.getTotalAlumnos()
      this.getTotalVehiculos()
      this.getClasesPracticas()
     }
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
    },

    async getTotalProfesores () {
      const autoescuelaId = this.$store.state.autoescuelas.autoescuela._id
      
      // Cargo los datos de la base de datos
      this.total_profesores = await profesoresApi.getProfesorAllByAutoescuelaId(autoescuelaId)
        .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            if (data.code === 200){
              return data.result.total
            }else{
              return null
            }
        })
        .catch(err => {
            console.log(err)
        })
    },
    
    async getTotalAlumnos () {
      const autoescuelaId = this.$store.state.autoescuelas.autoescuela._id
      
      // Cargo los datos de la base de datos
      this.total_alumnos = await alumnosApi.getAlumnoAllByAutoescuelaId(autoescuelaId)
        .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            if (data.code === 200){
              return data.result.total
            }else{
              return null
            }
        })
        .catch(err => {
            console.log(err)
        })
    },

    async getTotalVehiculos () {
      const autoescuelaId = this.$store.state.autoescuelas.autoescuela._id
      
      // Cargo los datos de la base de datos
      this.total_vehiculos = await vehiculosApi.getVehiculoAllByAutoescuelaId(autoescuelaId)
        .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            if (data.code === 200){
              return data.result.total
            }else{
              return null
            }
        })
        .catch(err => {
            console.log(err)
        })
    },

    async getClasesPracticas () {
      const autoescuelaId = this.$store.state.autoescuelas.autoescuela._id

      // Cargo los datos de la base de datos
      this.total_clases_practicas = await clases_practicasApi.getClasePracticaAllByAutoescuelaId(autoescuelaId)
        .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            if (data.code === 200){
              return data.result.total
            }else{
              return null
            }
        })
        .catch(err => {
            console.log(err)
        })
    },

  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>