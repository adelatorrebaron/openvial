<template>

  <div class="vehiculos">
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
        <button type="button" class="btn btn-primary btn-circle btn-xl" v-on:click="showVehiculoModalForm()">
          <i class="fa fa-plus"></i>
        </button>
      </section>

      <section class="content">
        <div class="row">
          <div class="col-xs-12">
            
            <div class="box">

              <div class="box-header">
                <h3 class="box-title">Listado de vehiculos</h3>
                <div class="box-tools">
                  <div class="input-group input-group-sm" style="width: 250px;">
                    <input type="text" v-model="search" class="form-control pull-right" placeholder="Busqueda por Matricula">
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
                      <th>Matrícula</th>
                      <th>Marca</th>
                      <th>Modelo</th>
                      <th>Cilindrada</th>
                      <th>Color</th>
                      <th></th>
                    </tr>
                  </thead>
                  <!--<tbody v-for="vehiculo in searchVehiculo" v-bind:key="vehiculo._id"> -->
                  <tbody>
                    <tr v-for="vehiculo in searchVehiculo" v-bind:key="vehiculo._id">
                      <td></td>
                      <td>{{ vehiculo.matricula }}</td>
                      <td>{{ vehiculo.marca }}</td>
                      <td>{{ vehiculo.modelo }}</td>
                      <td>{{ vehiculo.cilindrada }}</td>
                      <td>{{ vehiculo.color }}</td>
                      <td>
                        <div class="pull-right">
                          <button type="button" class="btn btn-primary btn-sm" @click.prevent="populateVehiculoToEdit(vehiculo)"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger btn-sm" @click.prevent="deleteVehiculo(vehiculo)"><i class="fa fa-remove"></i></button>
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

    <!-- Formulario para crear y editar un vehiculo -->
    <vehiculo-modal-form v-if="model !== null"
      v-bind:show="vehiculoFormShow"
      v-bind:title="(model._id ? 'Editar vehículo' : 'Nuevo vehículo')"
      v-bind:vehiculo="model"
      v-on:onClosed="onClosedVehiculoModalForm()" 
      v-on:onCanceled="onCanceledVehiculoModalForm()" 
      v-on:onAccepted="onAcceptedVehiculoModalForm()">
    </vehiculo-modal-form>

    <!-- Formulario para confirmar la eliminacion del vehiculo -->
    <confirm-modal-form v-if="model !== null"
      v-bind:show="confirmFormShow"
      v-bind:title="'Eliminar vehiculo'"
      v-bind:message="'Está seguro que desea borrar el vehículo con matrícula ' + model.matricula + ' y de marca ' + model.marca"
      v-on:onClosed="onClosedConfirmModalForm()" 
      v-on:onCanceled="onCanceledConfirmModalForm()" 
      v-on:onAccepted="onAcceptedConfirmModalForm()">
    </confirm-modal-form>

  </div>

</template>

<script>
import vehiculosApi         from '@/services/api/vehiculos.js'
import vehiculoModalForm    from '@/components/vehiculos/vehiculo-modal-form'
import confirmModalForm     from '@/components/helpers/confirm-modal-form'

export default {
  name: 'vehiculos',

  components: {
    'vehiculo-modal-form':    vehiculoModalForm,
    'confirm-modal-form':   confirmModalForm
  },

  data () {
    return {
      ventanaTitulo: 'Vehículos',
      vehiculoFormShow: false,
      confirmFormShow: false,
      vehiculos: [],
      model: {},
      search: ''
    }
  },

  computed: {
    // Busca un vehiculo por su matricula
    searchVehiculo () {
      return this.vehiculos.filter((vehiculo) => vehiculo.matricula.includes(this.search)); 
    },
  },

  async created () {
    // Recargamos los vehiculos de la base de datos
    this.refreshVehiculos()
    
    // Reseteamos el modelo
    this.resetModel()
  },

  methods: {

    async refreshVehiculos () {
      // Muestro el mensaje de Loading
      this.$store.dispatch('showLoading')
      
      // Cargo los datos de la base de datos
      this.vehiculos = await vehiculosApi.getVehiculoAll()
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
      // Oculto el mensaje de Loading
      this.$store.dispatch('hideLoading')
    },


    async populateVehiculoToEdit (vehiculo) {
      // Asigno el elemento seleccionado al modelo
      this.model = Object.assign({}, vehiculo)

      // Mostramos el formulario
      this.showVehiculoModalForm()
    },


    async saveVehiculo () {
      // Muestro el mensaje de Loading
      this.$store.dispatch('showLoading')

      // Si tiene Id lo actualizo en caso contrario lo creo nuevo
      if (this.model._id) {
        // Actualizo el vehiculo
        await vehiculosApi.updateVehiculo(this.model)
      }
      else {
        // Al crear un vehiculo tengo que asignale el Id de autoescuela a la que pertenece
        this.model.autoescuela_id = this.$store.state.autoescuelas.autoescuela._id

        // Creamos el vehiculo
        await vehiculosApi.createVehiculo(this.model)
      }
      // Reseteamos el modelo
      this.resetModel()

      // Volvemos a recargar los alumnos
      await this.refreshVehiculos()

      // Oculto el mensaje de Loading
      this.$store.dispatch('hideLoading')
    },


    async deleteVehiculo (vehiculo) {
      // Clonamos el objeto vehículo en el objeto modelo
      this.model = Object.assign({}, vehiculo)

      this.confirmFormShow = true
    },


    async resetModel(){
      // Ponemos el modelo con los valores por defecto
      this.model = {
        _id: '',
        autoescuela_id: '',
        matricula: '',
        marca: '',
        modelo: '',
        cilindrada: '',
        color: '',
      }
    },


    showVehiculoModalForm(){
      // Mostramos el formulario
      this.vehiculoFormShow = true;
    },


    onClosedVehiculoModalForm(){
      // Ocultamos el formulario
      this.vehiculoFormShow = false;
      
      // Reseteamos el modelo
      this.resetModel()
    },


    onCanceledVehiculoModalForm(){
      // Ocultamos el formulario
      this.vehiculoFormShow = false;
      
      // Reseteamos el modelo
      this.resetModel()
    },


    onAcceptedVehiculoModalForm(model){
      // Muestro el mensaje de Loading
      this.$store.dispatch('showLoading')

      // Ocultamos el formulario
      this.vehiculoFormShow = false;
      
      // Guardamos el registro, ya sea crear o actualizar
      this.saveVehiculo()

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
      
      // Eliminamos el vehiculo
      await vehiculosApi.deleteVehiculo(this.model._id)

      // Actualizamos la lista de vehiculos
      await this.refreshVehiculos()

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