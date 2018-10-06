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
        <button type="button" class="btn btn-primary btn-circle btn-xl" v-on:click="showClasePracticaModalForm()">
          <i class="fa fa-plus"></i>
        </button>
      </section>

      <section class="content">
        <div class="row">
          <div class="col-xs-12">
            
            <div class="box">

              <div class="box-header">
                <h3 class="box-title">Listado de clases prácticas</h3>
                <div class="box-tools">
                  <!--
                  <div class="input-group input-group-sm" style="width: 250px;">
                    <input type="text" v-model="search" class="form-control pull-right" placeholder="Busqueda por DNI">
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-info btn-flat"><i class="fa fa-search"></i></button>
                    </div>
                  </div>
                  -->
                </div>
              </div>
              
              <div class="box-body table-responsive no-padding">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Alumno</th>
                      <th>Profesor</th>
                      <th class="text-center">Matrícula vehículo</th>
                      <th class="text-center">Fecha</th>
                      <th class="text-center">Hora inicio</th>
                      <th class="text-center">Hora finalización</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="clase_practica in clases_practicas" v-bind:key="clase_practica._id">
                      <td>{{ nombreAlumnoCompleto(clase_practica.alumno_id) }}</td>
                      <td>{{ nombreProfesorCompleto(clase_practica.profesor_id) }}</td>
                      <td class="text-center">{{ matriculaVehiculo(clase_practica.vehiculo_id) }}</td>
                      <td class="text-center">{{ clase_practica.fecha_clase }}</td>
                      <td class="text-center">{{ clase_practica.hora_inicio }}</td>
                      <td class="text-center">{{ clase_practica.hora_finalizacion }}</td>
                      <td>
                        <div class="pull-right">
                          <button type="button" class="btn btn-primary btn-sm" @click.prevent="populateClasePracticaToEdit(clase_practica)"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger btn-sm" @click.prevent="deleteClasePractica(clase_practica)"><i class="fa fa-remove"></i></button>
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

    <!-- Formulario para crear y editar una clase practica -->

    <clase_practica-modal-form v-if="model !== null"
      v-bind:show="clase_practicaFormShow"
      v-bind:title="(model._id ? 'Editar clase práctica' : 'Nueva clase práctica')"
      v-bind:clase_practica="model"
      v-bind:alumnos="alumnos"
      v-bind:profesores="profesores"
      v-bind:vehiculos="vehiculos"
      v-on:onClosed="onClosedClasePracticaModalForm()" 
      v-on:onCanceled="onCanceledClasePracticaModalForm()" 
      v-on:onAccepted="onAcceptedClasePracticaModalForm()">
    </clase_practica-modal-form>


    <!-- Formulario para confirmar la eliminarcion de la clase practica -->
    <confirm-modal-form v-if="model !== null"
      v-bind:show="confirmFormShow"
      v-bind:title="'Eliminar clase práctica'"
      v-bind:message="'¿Está seguro que desea borrar la clase práctica?'"
      v-on:onClosed="onClosedConfirmModalForm()" 
      v-on:onCanceled="onCanceledConfirmModalForm()" 
      v-on:onAccepted="onAcceptedConfirmModalForm()">
    </confirm-modal-form>

  </div>

</template>

<script>
import clases_practicasApi      from '@/services/api/clases_practicas.js'
import alumnosApi               from '@/services/api/alumnos.js'
import profesoresApi            from '@/services/api/profesores.js'
import vehiculosApi             from '@/services/api/vehiculos.js'

import clase_practicaModalForm  from '@/components/clases_practicas/clases_practicas-modal-form'
import confirmModalForm         from '@/components/helpers/confirm-modal-form'

export default {
  name: 'clases_practicas',

  components: {
    'clase_practica-modal-form':    clase_practicaModalForm,
    'confirm-modal-form':           confirmModalForm
  },

  data () {
    return {
      ventanaTitulo: 'Clases prácticas',
      clase_practicaFormShow: false,
      confirmFormShow: false,
      clases_practicas: [],
      alumnos: [],
      profesores: [],
      vehiculos:[],
      model: {},
      search: ''
    }
  },

  computed: {
    // Busca un alumno por el dni
    /*
    searchAlumno () {
      return this.alumnos.filter((alumno) => alumno.dni.includes(this.search)); 
    }
    */

  },

  async created () {
    
    // Obtengo todos los datos a la vez
    Promise.all([
      this.refreshClasesPracticas(),
      this.refreshAlumnos(),
      this.refreshVehiculos(),
      this.refreshProfesores()
    ])
      .then((data) => {
        this.clases_practicas = data[0]
        this.alumnos          = data[1]
        this.vehiculos        = data[2]
        this.profesores       = data[3]
      })

    // Reseteamos el modelo
    this.resetModel()
  },

  methods: {
    nombreAlumnoCompleto(alumnoId) {
      const alumno = this.alumnos.filter((alumno) => alumno._id == alumnoId)[0]
      return alumno.nombre + " " + alumno.primer_apellido + " " + alumno.segundo_apellido
    },

    nombreProfesorCompleto(profesorId) {
      const profesor = this.profesores.filter((profesor) => profesor._id == profesorId)[0]
      return profesor.nombre + " " + profesor.primer_apellido + " " + profesor.segundo_apellido
    },

    matriculaVehiculo(vehiculoId) {
      const vehiculo = this.vehiculos.filter((vehiculo) => vehiculo._id == vehiculoId)[0]
      return vehiculo.matricula
    },


    refreshClasesPracticas () {
      // Cargo los datos de la base de datos
      return clases_practicasApi.getClasePracticaAll()
        .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            if (data.code === 200){
              return data.result.clases_practicas
            }else{
              return null
            }
        })
        .catch(err => {
            console.log(err)
        })
    },


    async refreshAlumnos() {
      // Cargo los datos de la base de datos
      return alumnosApi.getAlumnoAll()
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
    },


    async refreshProfesores () {
      // Cargo los datos de la base de datos
      return profesoresApi.getProfesorAll()
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
    },


    async refreshVehiculos () {
      // Cargo los datos de la base de datos
      return vehiculosApi.getVehiculoAll()
        .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            if (data.code === 200){
              return data.result.vehiculos
            }else{
              return null
            }
        })
        .catch(err => {
            console.log(err)
        })
    },


    async populateClasePracticaToEdit (clase_practica) {
      // Asigno el elemento seleccionado al modelo
      this.model = Object.assign({}, clase_practica)

      // Mostramos el formulario
      this.showClasePracticaModalForm()
    },


    async saveClasePractica () {
      // Muestro el mensaje de Loading
      this.$store.dispatch('showLoading')

      // Convertimos al formato que entiende la base de datos "01/01/2018 08:30"
      const hora_inicio = this.model.fecha_clase + ' ' + this.model.hora_inicio
      const hora_finalizacion = this.model.fecha_clase + ' ' + this.model.hora_finalizacion
      
      this.model.hora_inicio = hora_inicio
      this.model.hora_finalizacion = hora_finalizacion

      // Si tiene Id lo actualizo en caso contrario lo creo nuevo
      if (this.model._id) {
        // Actualizo el alumno
        await clases_practicasApi.updateClasePractica(this.model)
      }
      else {
        // Al crear una clase practica tengo que asignale el Id de autoescuela a la que pertenece
        this.model.autoescuela_id = this.$store.state.autoescuelas.autoescuela._id

        // Creamos la clase practica
        await clases_practicasApi.createClasePractica(this.model)
      }
      // Reseteamos el modelo
      this.resetModel()

      // Volvemos a recargar las clases practicas
      this.clases_practicas = await this.refreshClasesPracticas()

      // Oculto el mensaje de Loading
      this.$store.dispatch('hideLoading')
    },


    async deleteClasePractica (clase_practica) {
      // Clonamos el objeto profesor en el objeto modelo
      this.model = Object.assign({}, clase_practica)

      this.confirmFormShow = true
    },


    async resetModel(){
      // Ponemos el modelo con los valores por defecto
      this.model = {
        _id: '',
        autoescuela_id: '',
        profesor_id: '',
        alumno_id: '',
        vehiculo_id: '',
        fecha_clase: '',
        hora_inicio: '',
        hora_finalizacion: '',
        descripcion_recorrido: '',
        errores_cometidos_alumno: ''
      }
    },


    showClasePracticaModalForm(){
      // Mostramos el formulario
      this.clase_practicaFormShow = true;
    },


    onClosedClasePracticaModalForm(){
      // Ocultamos el formulario
      this.clase_practicaFormShow = false;
      
      // Reseteamos el modelo
      this.resetModel()
    },


    onCanceledClasePracticaModalForm(){
      // Ocultamos el formulario
      this.clase_practicaFormShow = false;
      
      // Reseteamos el modelo
      this.resetModel()
    },


    onAcceptedClasePracticaModalForm(model){
      // Muestro el mensaje de Loading
      this.$store.dispatch('showLoading')

      // Ocultamos el formulario
      this.clase_practicaFormShow = false;
      
      // Guardamos el registro, ya sea crear o actualizar
      this.saveClasePractica()

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
      
      // Eliminamos la clase practica
      await clases_practicasApi.deleteClasePractica(this.model._id)

      // Volvemos a recargar las clases practicas
      this.clases_practicas = await this.refreshClasesPracticas()

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