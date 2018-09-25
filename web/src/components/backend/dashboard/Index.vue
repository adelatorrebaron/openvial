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
      <section class="content-header">

        <div class="col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4">

          <div class="row margin-top-10">
            <div class="col-md-12 text-center">
              <h3>Espera, ¿aún no has creado la Autoescuela?</h3>
            </div>
          </div>

          <div class="row margin-top-10">
            <div class="col-md-12 text-center">
              <img src="@/assets/inicializar_autoescuela.png">
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <p>Una vez creada la Autoescuela podrás introducir todos los elementos que la componen, como profesores, alumnos, clases, pagos, vehículos, en definitiva, gestionar completamente tu Centro de Formación Vial</p>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <div class="btn-add-container">
                <button type="button" class="btn btn-success btn-circle btn-xl" data-toggle="modal" data-target="#formAddAutoescuela">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        
        </div>
      </section>
    </div>


    <div>
      <section class="content-header">

        <div class="col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4">

          <div class="row margin-top-10">
            <div class="col-md-12 text-center">
              <h3>Aún no hemos terminado,<br/>finalizaremos configurando tu perfil...</h3>
            </div>
          </div>

          <div class="row margin-top-10">
            <div class="col-md-12 text-center">
              <img src="@/assets/inicializar_perfil.png">
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <p>Mediante la configuración de tu perfíl podrás asignar a tu usuario la foto que desees. Además también podrás realizar otro tipo de configuraciones.</p>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <div class="btn-add-container">
                <button type="button" class="btn btn-success btn-circle btn-xl" data-toggle="modal" data-target="#formAddPerfil">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        
        </div>
      </section>
    </div>


    <div class="modal fade" id="formAddAutoescuela" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Información para el Centro de Formación Vial</h4>
          </div>
          <div class="modal-body">
            <!-- INFORMACION GENERAL -->
            <div class="box box-solid">
              <div class="box-header with-border">
                <h3 class="box-title">Información general</h3>
              </div>
              <div class="box-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Denominación:</label>
                      <input v-model="autoescuela.denominacion" type="text" class="form-control" placeholder="Denominación">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Nº Provincial:</label>
                      <input v-model="autoescuela.numero_provincial" type="text" class="form-control" placeholder="Nº Provincial">
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Sección:</label>
                      <input v-model="autoescuela.seccion" type="text" class="form-control" placeholder="Sección">
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Dígito de control:</label>
                      <input v-model="autoescuela.digito_control" type="text" class="form-control" placeholder="Dígito de control">
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Nº Secuencial:</label>
                      <input v-model="autoescuela.numero_secuencial" type="text" class="form-control" placeholder="Nº Secuencial">
                    </div>
                  </div>                                    
                </div>
              </div>
            </div>

            <!-- DIRECCION -->
            <div class="box box-solid">
              <div class="box-header with-border">
                <h3 class="box-title">Dirección</h3>
              </div>
              <div class="box-body">
                <div class="row">
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Tipo de vía:</label>
                      <input v-model="autoescuela.direccion.via.tipo" type="text" class="form-control" placeholder="Tipo de vía">
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="form-group">
                      <label>Nombre:</label>
                      <input v-model="autoescuela.direccion.via.nombre" type="text" class="form-control" placeholder="Nombre">
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Número:</label>
                      <input v-model="autoescuela.direccion.via.numero" type="text" class="form-control" placeholder="Numero">
                    </div>
                  </div>
                </div>
                <div class="row">        
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Bloque:</label>
                      <input v-model="autoescuela.direccion.via.bloque" type="text" class="form-control" placeholder="Bloque">
                    </div>
                  </div>        
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Portal:</label>
                      <input v-model="autoescuela.direccion.via.portal" type="text" class="form-control" placeholder="Portal">
                    </div>
                  </div> 
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Escalera:</label>
                      <input v-model="autoescuela.direccion.via.escalera" type="text" class="form-control" placeholder="Escalera">
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Planta:</label>
                      <input v-model="autoescuela.direccion.via.planta" type="text" class="form-control" placeholder="Planta">
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Puerta:</label>
                      <input v-model="autoescuela.direccion.via.puerta" type="text" class="form-control" placeholder="Puerta">
                    </div>
                  </div>            
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Kilómetro:</label>
                      <input v-model="autoescuela.direccion.via.kilometro" type="text" class="form-control" placeholder="Kilómetro">
                    </div>
                  </div>
                </div>

                <div class="row">        
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Código postal:</label>
                      <input v-model="autoescuela.direccion.codigo_postal" type="text" class="form-control" placeholder="Código postal">
                    </div>
                  </div>        
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Población:</label>
                      <input v-model="autoescuela.direccion.poblacion" type="text" class="form-control" placeholder="Población">
                    </div>
                  </div> 
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Provincia:</label>
                      <input v-model="autoescuela.direccion.provincia" type="text" class="form-control" placeholder="Provincia">
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>País:</label>
                      <input v-model="autoescuela.direccion.pais" type="text" class="form-control" placeholder="Pais">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CONTACTO -->
            <div class="box box-solid">
              <div class="box-header with-border">
                <h3 class="box-title">Contacto</h3>
              </div>
              <div class="box-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Correo electrónico:</label>
                      <input v-model="autoescuela.contacto.email" type="text" class="form-control" placeholder="Correo electrónico">
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Teléfono fijo:</label>
                      <input v-model="autoescuela.contacto.telefono_fijo" type="text" class="form-control" placeholder="Teléfono fijo">
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Teléfono móvil:</label>
                      <input v-model="autoescuela.contacto.telefono_movil" type="text" class="form-control" placeholder="Teléfono móvil">
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Whatsapp:</label>
                      <input v-model="autoescuela.contacto.whatsapp" type="text" class="form-control" placeholder="Whatsapp">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Sitio web:</label>
                      <input v-model="autoescuela.contacto.website" type="text" class="form-control" placeholder="Sitio web">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Facebook:</label>
                      <input v-model="autoescuela.contacto.facebook" type="text" class="form-control" placeholder="Facebook">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Twitter:</label>
                      <input v-model="autoescuela.contacto.twitter" type="text" class="form-control" placeholder="Twitter">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-info">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
            <button type="button" @click="salvarDatosAutoescuela()" data-dismiss="modal" class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>

    </div>


    <div class="modal fade" id="formAddPerfil" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Configurando tu perfil</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">

                <!-- Profile Image -->
                
                <div class="image-preview" v-if="perfil.imageData.length > 0">
                  <img class="profile-user-img img-responsive img-circle" :src="imageData" @click="cargarArchivoImagenPerfil()">
                </div>
                <div v-else >
                  <img class="profile-user-img img-responsive img-circle" @click="$refs.fileInput.click()" src="@/assets/user_default.png" alt="User profile picture">
                  <input type="file" id="imagenPerfil" @change="onFileSelected" ref="fileInput" accept="image/*" style="display: none;" />
                </div>
                <h3 class="profile-username text-center">{{currentUser.username}}</h3>

                <p class="text-muted text-center">{{currentUser.email}}</p>

                <div class="nav-tabs-custom">
                  <ul class="nav nav-tabs">
                    <li class="active"><a href="#tab_Contacto" data-toggle="tab" aria-expanded="true">Contacto</a></li>
                    <li class=""><a href="#tab_Educacion" data-toggle="tab" aria-expanded="false">Educacion</a></li>
                    <li class=""><a href="#tab_Observaciones" data-toggle="tab" aria-expanded="false">Observaciones</a></li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane active" id="tab_Contacto">
                      <!-- CONTACTO -->
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Teléfono fijo:</label>
                            <input v-model="perfil.contacto.telefono_fijo" type="text" class="form-control" placeholder="Teléfono fijo">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Teléfono móvil:</label>
                            <input v-model="perfil.contacto.telefono_movil" type="text" class="form-control" placeholder="Teléfono móvil">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Whatsapp:</label>
                            <input v-model="perfil.contacto.whatsapp" type="text" class="form-control" placeholder="Whatsapp">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Correo electrónico:</label>
                            <input v-model="perfil.contacto.email" type="text" class="form-control" placeholder="Correo electrónico">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Sitio web:</label>
                            <input v-model="perfil.contacto.website" type="text" class="form-control" placeholder="Sitio web">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Facebook:</label>
                            <input v-model="perfil.contacto.facebook" type="text" class="form-control" placeholder="Facebook">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Twitter:</label>
                            <input v-model="perfil.contacto.twitter" type="text" class="form-control" placeholder="Twitter">
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_Educacion">
                      <textarea v-model="perfil.educacion" class="form-control noresize" rows="10" placeholder=""></textarea>
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_Observaciones">
                      <textarea v-model="perfil.observaciones" class="form-control noresize" rows="10" placeholder=""></textarea>
                    </div>
                    <!-- /.tab-pane -->
                  </div>
                  <!-- /.tab-content -->
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-info">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
            <button type="button" data-dismiss="modal" @click="salvarDatosPerfil()" class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>

    </div>


  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
//import Modal from '@/components/Modal'

export default {
  name: 'dashboard',
  components: { 
//     Modal 
  },
  data () {
    return {
      titulo: 'Dashboard',
      autoescuela: {
        usuario_id: '5ba4d317bf45010012952d5f',
        denominacion: 'Autoescuela Odisea 18',
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
      perfil: {
        contacto: {
          telefono_fijo: '958540562',
          telefono_movil: '636244362',
          whatsapp: '636244362',
          email: 'alejandrodelatorrebaron18@gmail.com',
          website: 'www.autoescuelaodisea.com',
          facebook: 'mifaceboo.com',
          twitter: 'mituiter.com'
        },
        educacion: 'Texto de educacion',
        observaciones: 'Texto de observaciones',
        imageData: ''
      }
    }
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser'}),
    ...mapGetters({ currentAutoescuela: 'currentAutoescuela'}),
    ...mapGetters({ existAutoescuela: 'existAutoescuela'})
  },
  created () {
    this.cargarDatosAutoescuela()
  },
  updated () {
    this.cargarDatosAutoescuela()
  },
  methods: {
    cargarDatosAutoescuela() {
      if (!this.existAutoescuela)
        this.$store.dispatch('loadAutoescuela', this.currentUser)
    },
    salvarDatosAutoescuela() {
      this.$store.dispatch('saveAutoescuela', this.autoescuela)
    },
    salvarDatosPerfil() {
      alert("Pendiente guardar los datos del perfil")
    },
    onFileSelected (event) {
      console.log(event)
      this.perfil.imageData = event.target.files[0]
    },
    onUpload(){
      const fd = new FormData()
      fd.append('image',this.perfil.imageData, this.perfil.imageData.name)
      axios.post('urldelapi', fd, {
        onUploadProgress: uploadEvent => {
          console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%' )
        }
      })
        .then(res => {
          console.log(res)
        })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

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
}

.modal-body
{
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  background-color: #FFFFFF;
}

.modal-content
{
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  background-color: transparent;
}

.modal-footer
{
  background-color: #d9edf7;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  -webkit-border-bottom-left-radius: 6px;
  -webkit-border-bottom-right-radius: 6px;
  -moz-border-radius-bottomleft: 6px;
  -moz-border-radius-bottomright: 6px;
}

.modal-header
{
  background-color: #337ab7;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  -webkit-border-top-left-radius: 6px;
  -webkit-border-top-right-radius: 6px;
  -moz-border-radius-topleft: 6px;
  -moz-border-radius-topright: 6px;
}

.noresize {
  resize: none; 
}
</style>