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
        <button type="button" class="btn btn-primary btn-circle btn-xl" v-on:click="showProfesorModalForm()">
          <i class="fa fa-plus"></i>
        </button>
      </section>

      <section class="content">
        <div class="row">
          <div class="col-xs-12">
            
            <div class="box">

              <div class="box-header">
                <h3 class="box-title">Listado de profesores</h3>
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
                      <th class="text-center">Teléfono fijo</th>
                      <th class="text-center">Teléfono móvil</th>
                      <th>Correo electrónico</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="profesor in searchProfesor" v-bind:key="profesor._id">
                      <td v-if="profesor.estado === true">
                        <div class="text-info">
                          <i class="fa fa-circle"></i>
                        </div>
                      </td>
                      <td v-else>
                        <div class="text-info">
                          <i class="fa fa-circle-o"></i>
                        </div>                      
                      </td>
                      <td>{{ profesor.dni }}</td>
                      <td>{{ fullName(profesor) }}</td> <!-- Aqui muestro el nombre completo que lo genera una funcion -->
                      <td class="text-center">{{ profesor.fecha_nacimiento }}</td>
                      <td class="text-center">{{ profesor.contacto.telefono_fijo }}</td>
                      <td class="text-center">{{ profesor.contacto.telefono_movil }}</td>
                      <td>{{ profesor.contacto.email }}</td>
                      <td>
                        <div class="pull-right">
                          <button type="button" class="btn btn-info btn-sm" @click.prevent="reportProfesor(profesor)"><i class="fa fa-file-pdf-o"></i></button>
                          <button type="button" class="btn btn-primary btn-sm" @click.prevent="populateProfesorToEdit(profesor)"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger btn-sm" @click.prevent="deleteProfesor(profesor)"><i class="fa fa-remove"></i></button>
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

    <!-- Formulario para crear y editar un profesor -->
    <profesor-modal-form v-if="model !== null"
      v-bind:show="profesorFormShow"
      v-bind:title="(model._id ? 'Editar profesor' : 'Nuevo profesor')"
      v-bind:profesor="model"
      v-on:onClosed="onClosedProfesorModalForm()" 
      v-on:onCanceled="onCanceledProfesorModalForm()" 
      v-on:onAccepted="onAcceptedProfesorModalForm()">
    </profesor-modal-form>

    <!-- Formulario para confirmar la eliminarcion del profesor -->
    <confirm-modal-form v-if="model !== null"
      v-bind:show="confirmFormShow"
      v-bind:title="'Eliminar profesor'"
      v-bind:message="'Está seguro que desea borrar el profesor con dni ' + model.dni + ' y de nombre ' + this.fullName(model)"
      v-on:onClosed="onClosedConfirmModalForm()" 
      v-on:onCanceled="onCanceledConfirmModalForm()" 
      v-on:onAccepted="onAcceptedConfirmModalForm()">
    </confirm-modal-form>

  </div>

</template>

<script>
import profesoresApi      from '@/services/api/profesores.js'
import informesApi        from '@/services/api/informes.js'
import profesorModalForm  from '@/components/profesores/profesor-modal-form'
import confirmModalForm   from '@/components/helpers/confirm-modal-form'

export default {
  name: 'profesores',

  components: {
    'profesor-modal-form':    profesorModalForm,
    'confirm-modal-form':   confirmModalForm
  },

  data () {
    return {
      ventanaTitulo: 'Profesores',
      profesorFormShow: false,
      confirmFormShow: false,
      profesores: [],
      model: {},
      search: ''
    }
  },

  computed: {
    // Busca un profesor por el dni
    searchProfesor () {
      return this.profesores.filter((profesor) => profesor.dni.includes(this.search)); 
    },
  },

  async created () {
    // Recargamos los profesores de la base de datos
    this.refreshProfesores()
    
    // Reseteamos el modelo
    this.resetModel()
  },

  methods: {
    fullName: function (profesor) {
      return profesor.nombre + ' ' + profesor.primer_apellido + ' ' + profesor.segundo_apellido;
    },

    async refreshProfesores () {
      // Muestro el mensaje de Loading
      this.$store.dispatch('showLoading')

      const autoescuelaId = this.$store.state.autoescuelas.autoescuela._id
      
      // Cargo los datos de la base de datos
      this.profesores = await profesoresApi.getProfesorAllByAutoescuelaId(autoescuelaId)
        .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            if (data.code === 200){
              return data.result.profesores
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


    async populateProfesorToEdit (profesor) {
      // Asigno el elemento seleccionado al modelo
      this.model = Object.assign({}, profesor)

      // Mostramos el formulario
      this.showProfesorModalForm()
    },


    async saveProfesor () {
      // Muestro el mensaje de Loading
      this.$store.dispatch('showLoading')

      // Si tiene Id lo actualizo en caso contrario lo creo nuevo
      if (this.model._id) {
        // Actualizo el profesor
        await profesoresApi.updateProfesor(this.model)
      }
      else {
        // Al crear un profesor tengo que asignale el Id de autoescuela a la que pertenece
        this.model.autoescuela_id = this.$store.state.autoescuelas.autoescuela._id

        // Creamos el profesor
        await profesoresApi.createProfesor(this.model)
      }
      // Reseteamos el modelo
      this.resetModel()

      // Volvemos a recargar los profesores
      await this.refreshProfesores()

      // Oculto el mensaje de Loading
      this.$store.dispatch('hideLoading')
    },


    async deleteProfesor (profesor) {
      // Clonamos el objeto profesor en el objeto modelo
      this.model = Object.assign({}, profesor)

      this.confirmFormShow = true
    },


    async reportProfesor (profesor) {

      await informesApi.report('profesor', profesor)
      .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            //console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    },


    async resetModel(){
      // Ponemos el modelo con los valores por defecto
      this.model = {
        _id: '',
        autoescuela_id: '',
        numero_profesor: '',
        dni: '',
        dni_fecha_caducidad: '',
        nombre: '',
        primer_apellido: '',
        segundo_apellido: '',
        sexo: '',
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
        permisos_conduccion: [],
        datos_bancarios: {
          nombre_entidad: '',
          codigo_iban: '',
          codigo_entidad: '',
          codigo_oficina: '',
          digito_control: '',
          numero_de_cuenta: ''
        },
        fecha_creacion: '',
        estado: true
      }
    },


    showProfesorModalForm(){
      // Mostramos el formulario
      this.profesorFormShow = true;
    },


    onClosedProfesorModalForm(){
      // Ocultamos el formulario
      this.profesorFormShow = false;
      
      // Reseteamos el modelo
      this.resetModel()
    },


    onCanceledProfesorModalForm(){
      // Ocultamos el formulario
      this.profesorFormShow = false;
      
      // Reseteamos el modelo
      this.resetModel()
    },


    onAcceptedProfesorModalForm(model){
      // Muestro el mensaje de Loading
      this.$store.dispatch('showLoading')

      // Ocultamos el formulario
      this.profesorFormShow = false;
      
      // Guardamos el registro, ya sea crear o actualizar
      this.saveProfesor()

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
      
      // Eliminamos el profesor
      await profesoresApi.deleteProfesor(this.model._id)

      // Actualizamos la lista de profesores
      await this.refreshProfesores()

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