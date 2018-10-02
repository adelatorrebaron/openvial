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
        <button type="button" class="btn btn-success btn-circle btn-xl" v-on:click="showAlumnoModalFormCreate()">
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
                    <input type="text" class="form-control pull-right" placeholder="Busqueda">
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-info btn-flat"><i class="fa fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.box-header -->
              <div class="box-body table-responsive no-padding">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Dni</th>
                      <th>Nombre</th>
                      <th>Primer apellido</th>
                      <th>Segundo apellido</th>
                      <th>Teléfono móvil</th>
                      <th>Correo electrónico</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody v-for="(alumno, index) in alumnos" v-bind:key="alumno.id">
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
                      <td>{{ alumno.dni }} - {{index}}</td>
                      <td>{{ alumno.nombre }}</td>
                      <td>{{ alumno.primer_apellido }}</td>
                      <td>{{ alumno.segundo_apellido }}</td>
                      <td>{{ alumno.contacto.telefono_movil }}</td>
                      <td>{{ alumno.contacto.email }}</td>
                      <td>
                        <div class="pull-right">
                          <button type="button" class="btn btn-primary btn-sm" @click="showAlumno(index)"><i class="fa fa-eye"></i></button>
                          <button type="button" class="btn btn-primary btn-sm" @click="editAlumno(index)"><i class="fa fa-pencil"></i></button>
                          <button type="button" class="btn btn-danger btn-sm" @click="deleteAlumno(index)"><i class="fa fa-remove"></i></button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
        </div>
      </section>
    </div>


    <!-- Formulario para crear un usuario -->
    <alumno-modal-form
      v-bind:show="alumnoFormShowCreate"
      v-bind:title="alumnoFormTitleCreate"
      v-bind:action="alumnoFormActionCreate"
      v-bind:alumno="alumnoNew"
      v-on:onClosed="onClosedAlumnoModalFormCreate()" 
      v-on:onCanceled="onCanceledAlumnoModalFormCreate()" 
      v-on:onAccepted="onAcceptedAlumnoModalFormCreate()">
    </alumno-modal-form>

  </div>



</template>

<script>
import { mapGetters }     from 'vuex'
import alumnosApi         from '@/services/api/alumnos.js'
import alumnoModalForm    from '@/components/alumnos/alumno-modal-form'

export default {
  name: 'alumnos',
    components: {
    'alumno-modal-form':     alumnoModalForm
  },
  data () {
    return {
      ventanaTitulo: 'Alumnos',
      alumnoFormShowCreate: false,
      alumnoFormTitleCreate: 'Crear un alumno',
      alumnoFormActionCreate: 'create',
      alumnos: [],
      alumnoNew: {
        _id: '',
        autoescuela_id: '',
        dni: '44286484F',
        dni_fecha_caducidad: '2018-10-10',
        nombre: 'Alejandro',
        primer_apellido: 'de la Torre',
        segundo_apellido: 'Barón',
        sexo: 'H',
        fecha_nacimiento: '1975-06-18',
        pais_nacimiento: 'Argentina',
        nacionalidad: 'Española',
        direccion: {
          via: {
            tipo: 'Calle',
            nombre: 'Jose Medina',
            numero: '25',
            bloque: '',
            portal: '',
            escalera: '',
            planta: '',
            puerta: '',
            kilometro: ''
          },
          codigo_postal: '18170',
          poblacion: 'Alfacar',
          provincia: 'Granada',
          pais: 'España'
        },
        contacto: {
            telefono_fijo: '958540632',
            telefono_movil: '636243506',
            whatsapp: '636243506',
            email: 'alejandrodelatorrbaron@gmail.com',
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
      },      
    }
  },
  computed: {
//    ...mapGetters({ currentUser: 'currentUser' })
  },
  created () {
    this.loadAlumnosData()
  },
  updated () {

  },
  methods: {
    loadAlumnosData() {
      this.$store.dispatch('showLoading')
      return alumnosApi.getAlumnoAll()
        .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            if (data.code === 200){
              this.alumnos = data.result.alumnos

            }else{
              this.alumnos = null
            }
            this.$store.dispatch('hideLoading')
        })
        .catch(err => {
            console.log(err)
        })
    },
    showAlumnoModalFormCreate(){
      this.alumnoFormTitleCreate = 'Crear un alumno'
      this.alumnoFormAction = 'create'

      // Muestro el formulario
      this.alumnoFormShowCreate = true
    },
    onClosedAlumnoModalFormCreate() {
      // Cierro el formulario
      this.alumnoFormShowCreate = false
    },
    onCanceledAlumnoModalFormCreate(){
      // Cierro el formulario
      this.alumnoFormShowCreate = false
    },
    onAcceptedAlumnoModalFormCreate(){
      // Cierro el formulario
      this.alumnoFormShowCreate = false
    },
    showAlumno(index){
      console.log("Motrar el indice:" + index)
    },
    editAlumno(index){
      console.log("Editar el indice:" + index)
    },
    deleteAlumno(index){
      console.log("Eliminar el indice:" + index)
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