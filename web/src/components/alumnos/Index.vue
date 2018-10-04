<template>

  <div class="alumnos">
    <div>
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>{{ventanaTitulo}}</h1>
        <ol class="breadcrumb">
          <li>
            <router-link to="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</router-link>
          </li>
          <li class="active">{{ventanaTitulo}}</li>
        </ol>
      </section>

      <section class="content-header" style="text-align:right">
        <button type="button" class="btn btn-primary btn-circle btn-xl" v-on:click="showAlumnoModalForm()">
          <i class="fa fa-plus"></i>
        </button>
      </section>

      <section class="content">
        <div class="row">
          <div class="col-xs-12">
            
            <div class="box">

              <div class="box-header">
                <h3 class="box-title">Listado de alumnos</h3>
                <div class="box-tools">
                  <div class="input-group input-group-sm" style="width: 250px;">
                    <input type="text" v-model="search" class="form-control pull-right" placeholder="Busqueda por DNI">
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-info btn-flat"><i class="fa fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="box-body table-responsive no-padding">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Dni</th>
                      <th>Nombre completo</th>
                      <th class="text-center">Fecha de nacimiento</th>
                      <th>Teléfono fijo</th>
                      <th>Teléfono móvil</th>
                      <th>Correo electrónico</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody v-for="alumno in searchAlumno" v-bind:key="alumno.id">
                    <tr>
                      <td v-if="alumno.estado === true">
                        <div class="text-info">
                          <i class="fa fa-circle"></i>
                        </div>
                      </td>
                      <td v-else>
                        <div class="text-info">
                          <i class="fa fa-circle-o"></i>
                        </div>                      
                      </td>
                      <td>{{ alumno.dni }}</td>
                      <td>{{ fullName(alumno) }}</td> <!-- Aqui muestro el nombre completo que lo genera una funcion -->
                      <td class="text-center">{{ alumno.fecha_nacimiento }}</td>
                      <td>{{ alumno.contacto.telefono_fijo }}</td>
                      <td>{{ alumno.contacto.telefono_movil }}</td>
                      <td>{{ alumno.contacto.email }}</td>
                      <td>
                        <div class="pull-right">
                          <!--<button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye"></i></button>-->
                          <button type="button" class="btn btn-primary btn-sm" @click.prevent="populateAlumnoToEdit(alumno)"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger btn-sm" @click.prevent="deleteAlumno(alumno)"><i class="fa fa-remove"></i></button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>

    <!-- Formulario para crear y editar un alumno -->
    <alumno-modal-form v-if="model !== null"
      v-bind:show="alumnoFormShow"
      v-bind:title="(model._id ? 'Editar alumno' : 'Nuevo alumno')"
      v-bind:alumno="model"
      v-on:onClosed="onClosedAlumnoModalForm()" 
      v-on:onCanceled="onCanceledAlumnoModalForm()" 
      v-on:onAccepted="onAcceptedAlumnoModalForm()">
    </alumno-modal-form>

    <!-- Formulario para confirmar la eliminarcion del alumno -->
    <confirm-modal-form v-if="model !== null"
      v-bind:show="confirmFormShow"
      v-bind:title="'Eliminar alumno'"
      v-bind:message="'Está seguro que desea borrar el alumno con dni ' + model.dni + ' y de nombre ' + this.fullName(model)"
      v-on:onClosed="onClosedConfirmModalForm()" 
      v-on:onCanceled="onCanceledConfirmModalForm()" 
      v-on:onAccepted="onAcceptedConfirmModalForm()">
    </confirm-modal-form>

  </div>

</template>

<script>
import alumnosApi         from '@/services/api/alumnos.js'
import alumnoModalForm    from '@/components/alumnos/alumno-modal-form'
import confirmModalForm   from '@/components/helpers/confirm-modal-form'

export default {
  name: 'alumnos',

  components: {
    'alumno-modal-form':    alumnoModalForm,
    'confirm-modal-form':   confirmModalForm
  },

  data () {
    return {
      ventanaTitulo: 'Alumnos',
      alumnoFormShow: false,
      confirmFormShow: false,
      alumnos: [],
      model: {},
      search: ''
    }
  },

  computed: {
    // Busca un alumno por el dni
    searchAlumno () {
      return this.alumnos.filter((alumno) => alumno.dni.includes(this.search)); 
    },
  },

  async created () {
    // Recargamos los alumnos de la base de datos
    this.refreshAlumnos()
    
    // Reseteamos el modelo
    this.resetModel()
  },

  methods: {
    fullName: function (alumno) {
      return alumno.nombre + ' ' + alumno.primer_apellido + ' ' + alumno.segundo_apellido;
    },

    async refreshAlumnos () {
      // Muestro el mensaje de Loading
      this.$store.dispatch('showLoading')
      
      // Cargo los datos de la base de datos
      this.alumnos = await alumnosApi.getAlumnoAll()
        .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            if (data.code === 200){
              return data.result.alumnos
            }else{
              return null
            }
        })
        .catch(err => {
            console.log(err)
        })
      // Oculto el mensaje de Loading
      this.$store.dispatch('hideLoading')
    },


    async populateAlumnoToEdit (alumno) {
      // Asigno el elemento seleccionado al modelo
      this.model = Object.assign({}, alumno)

      // Mostramos el formulario
      this.showAlumnoModalForm()
    },


    async saveAlumno () {
      // Muestro el mensaje de Loading
      this.$store.dispatch('showLoading')

      // Si tiene Id lo actualizo en caso contrario lo creo nuevo
      if (this.model._id) {
        // Actualizo el alumno
        await alumnosApi.updateAlumno(this.model)
      }
      else {
        // Al crear un alumno tengo que asignale el Id de autoescuela a la que pertenece
        this.model.autoescuela_id = this.$store.state.autoescuelas.autoescuela._id

        // Creamos el alumno
        await alumnosApi.createAlumno(this.model)
      }
      // Reseteamos el modelo
      this.resetModel()

      // Volvemos a recargar los alumnos
      await this.refreshAlumnos()

      // Oculto el mensaje de Loading
      this.$store.dispatch('hideLoading')
    },


    async deleteAlumno (alumno) {

      this.model = alumno

      this.confirmFormShow = true
    },


    async resetModel(){
      // Ponemos el modelo con los valores por defecto
      this.model = {
        _id: '',
        autoescuela_id: '',
        dni: '',
        dni_fecha_caducidad: '',
        nombre: '',
        primer_apellido: '',
        segundo_apellido: '',
        sexo: 'H',
        fecha_nacimiento: '',
        pais_nacimiento: '',
        nacionalidad: '',
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
            facebook: '',
            twitter: ''
        },
        documentacion_aportada: {
            entrega_fotocopia_dni: false,
            entrega_psicotecnico: false,
            entrega_fotografias: false,
            firma_tasas_examen: false,
            firma_autorizacion: false,
            firma_talon_foto: false
        },
        fecha_creacion: '',
        estado: true
      }
    },


    showAlumnoModalForm(){
      // Mostramos el formulario
      this.alumnoFormShow = true;
    },


    onClosedAlumnoModalForm(){
      // Ocultamos el formulario
      this.alumnoFormShow = false;
      
      // Reseteamos el modelo
      this.resetModel()
    },


    onCanceledAlumnoModalForm(){
      // Ocultamos el formulario
      this.alumnoFormShow = false;
      
      // Reseteamos el modelo
      this.resetModel()
    },


    onAcceptedAlumnoModalForm(model){
      // Muestro el mensaje de Loading
      this.$store.dispatch('showLoading')

      // Ocultamos el formulario
      this.alumnoFormShow = false;
      
      // Guardamos el registro, ya sea crear o actualizar
      this.saveAlumno()

      // Oculto el mensaje de Loading
      this.$store.dispatch('hideLoading')
    },


    onClosedConfirmModalForm(){
      // Ocultamos el formulario
      this.confirmFormShow = false;

      // Reseteamos el modelo
      this.resetModel()
    },


    onCanceledConfirmModalForm(){
      // Ocultamos el formulario
      this.confirmFormShow = false;

      // Reseteamos el modelo
      this.resetModel()      
    },


    async onAcceptedConfirmModalForm(){
      // Muestro el mensaje de Loading
      this.$store.dispatch('showLoading')

      // Ocultamos el formulario de confirmación
      this.confirmFormShow = false;
      
      // Eliminamos el alumno
       await alumnosApi.deleteAlumno(this.model._id)

      // Actualizamos la lista de alumnos
      await this.refreshAlumnos()

      // Reseteamos el modelo
      this.resetModel()

      // Oculto el mensaje de Loading
      this.$store.dispatch('hideLoading')
    }











  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.table > tbody > tr > td {
  vertical-align: middle;
}

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
  margin-right: 15px;
}

</style>