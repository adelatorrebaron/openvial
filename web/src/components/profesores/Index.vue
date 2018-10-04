<template>
  <div class="profesores">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Profesores</h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</router-link>
        </li>
        <li class="active">Profesores</li>
      </ol>
    </section>

    <section class="content-header" style="text-align:right">
      <button type="button" class="btn btn-success btn-circle btn-xl">
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
                    <th>Dni</th>
                    <th>Nombre</th>
                    <th>Primer apellido</th>
                    <th>Segundo apellido</th>
                    <th>Teléfono móvil</th>
                    <th>Correo electrónico</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody v-for="profesor in profesores" v-bind:key="profesor.dni">
                  <tr>
                    <td>{{ profesor.dni }}</td>
                    <td>{{ profesor.nombre }}</td>
                    <td>{{ profesor.primer_apellido }}</td>
                    <td>{{ profesor.segundo_apellido }}</td>
                    <td>{{ profesor.contacto.telefono_movil }}</td>
                    <td>{{ profesor.contacto.email }}</td>
                    <td>
                      <div class="pull-right">
                        <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye"></i></button>
                        <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-pencil"></i></button>
                        <button type="button" class="btn btn-danger btn-sm"><i class="fa fa-remove"></i></button>
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
</template>

<script>
import { mapGetters }     from 'vuex'
import alumnosApi         from '@/services/api/alumnos.js'

export default {
  name: 'profesores',
  data () {
    return {
      msg: 'Profesores',
      profesores: [
        {
          id: 'id_asdf1',
          autoescuela_id: 'autoescuela_id_asdf1',
          dni: 'dni_asdf1',
          nombre: 'nombre_asdf1',
          primer_apellido: 'primer_apellido_asdf1',
          segundo_apellido: 'segundo_apellido_asdf1',
          sexo: 'sexo_asdf1',
          fecha_nacimiento: 'fecha_nacimiento_asdf1',
          pais_nacimiento: 'pais_nacimiento1',
          nacionalidad: 'nacionalidad1',
          direccion: {
            via: {
              tipo: 'tipo_asdf1',
              nombre: 'nombre_asdf1',
              numero: 'numero_asdf1',
              bloque: 'bloque_asdf1',
              portal: 'portal_asdf1',
              escalera: 'escalera_asdf1',
              planta: 'planta_asdf1',
              puerta: 'puerta_asdf1',
              kilometro: 'kilometro_asdf1'
            },
            codigo_postal: 'codigo_postal_asdf1',
            poblacion: 'poblacion_asdf1',
            provincia: 'provincia_asdf1',
            pais: 'pais1'
          },
          contacto: {
            telefono_fijo: 'telefono_fijo_asdf1',
            telefono_movil: 'telefono_movil_asdf1',
            whatsapp: 'whatsapp_asdf1',
            email: 'email_asdf1',
            website: 'website_asdf1',
            facebook: 'facebook_asdf1',
            twitter: 'twitter_asdf1'
          },
          fecha_creacion: 'fecha_creacion_asdf1',
          estado: 'estado_asdf1'
        },
        {
          id: 'id_asdf2',
          autoescuela_id: 'autoescuela_id_asdf2',
          dni: 'dni_asdf2',
          nombre: 'nombre_asdf2',
          primer_apellido: 'primer_apellido_asdf2',
          segundo_apellido: 'segundo_apellido_asdf2',
          sexo: 'sexo_asdf2',
          fecha_nacimiento: 'fecha_nacimiento_asdf2',
          pais_nacimiento: 'pais_nacimiento2',
          nacionalidad: 'nacionalidad2',
          direccion: {
            via: {
              tipo: 'tipo_asdf2',
              nombre: 'nombre_asdf2',
              numero: 'numero_asdf2',
              bloque: 'bloque_asdf2',
              portal: 'portal_asdf2',
              escalera: 'escalera_asdf2',
              planta: 'planta_asdf2',
              puerta: 'puerta_asdf2',
              kilometro: 'kilometro_asdf2'
            },
            codigo_postal: 'codigo_postal_asdf2',
            poblacion: 'poblacion_asdf2',
            provincia: 'provincia_asdf2',
            pais: 'pais2'
          },
          contacto: {
            telefono_fijo: 'telefono_fijo_asdf2',
            telefono_movil: 'telefono_movil_asdf2',
            whatsapp: 'whatsapp_asdf2',
            email: 'email_asdf2',
            website: 'website_asdf2',
            facebook: 'facebook_asdf2',
            twitter: 'twitter_asdf2'
          },
          fecha_creacion: 'fecha_creacion_asdf2',
          estado: 'estado_asdf2'
        }
      ],
      alumnos: [],
      model: {},
    }
  },
  computed: {
//    ...mapGetters({ currentUser: 'currentUser' })
  },
  async created () {
    this.refreshAlumnos()
  },
  updated () {
//    this.checkCurrentLogin()
  },
  methods: {
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

    async populateAlumnoPostToEdit (alumno) {
      this.model = Object.assign({}, alumno)
    },

    async saveAlumno () {
      if (this.model._id) {
        await api.updateAlumno(this.model._id, this.model)
      } else {
        await api.createAlumno(this.model)
      }
      this.model = {} // reset form
      await this.refreshAlumnos()
    },
    
    async deleteAlumno (id) {
      if (confirm('¿Está seguro que desea borrar este alumno?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model._id === id) {
          this.model = {}
        }
        await api.deleteAlumno(id)
        await this.refreshAlumnos()
      }
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