
<template> 
    <div v-if="show">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog modal-md">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" @click="onClosed()">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 class="modal-title">{{ titulo }}</h4>
                            </div>
                            <div class="modal-body">
                              
                              <div class="row">
                                <div class="col-md-12">

                                  <!-- PROFILE IMAGE -->
                                  <div class="image-preview" v-if="perfil.imagen.length > 0">
                                    <img class="profile-user-img img-responsive img-circle" :src="perfil.imagen" @click="cargarArchivoImagenPerfil()">
                                  </div>
                                  <div v-else >
                                    <img class="profile-user-img img-responsive img-circle" @click="$refs.fileInput.click()" src="@/assets/user_default.png" alt="User profile picture">
                                    <input type="file" id="imagenPerfil" @change="onFileSelected" ref="fileInput" accept="image/*" style="display: none;" />
                                  </div>

                                  <h3 class="profile-username text-center">{{ currentUser.username }}</h3>

                                  <p class="text-muted text-center">{{ currentUser.email }}</p>

                                  <div class="nav-tabs-custom">
                                    <ul class="nav nav-tabs">
                                      <li class="active"><a href="#tab_Contacto" data-toggle="tab" aria-expanded="true">Contacto</a></li>
                                      <li class=""><a href="#tab_Educacion" data-toggle="tab" aria-expanded="false">Educación</a></li>
                                      <li class=""><a href="#tab_Observaciones" data-toggle="tab" aria-expanded="false">Observaciones</a></li>
                                    </ul>
                                    <div class="tab-content">
                                      <div class="tab-pane active" id="tab_Contacto">
                                        <!-- CONTACTO -->
                                        <div class="row">
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
                                          <div class="col-md-4">
                                            <div class="form-group">
                                              <label>Teléfono fijo:</label>
                                              <input v-model="perfil.contacto.telefono_fijo" type="text" class="form-control" placeholder="Teléfono fijo">
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-md-12">
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
                                      
                                      <div class="tab-pane" id="tab_Educacion">
                                        <textarea v-model="perfil.educacion" class="form-control noresize" rows="10" placeholder="Introduzca información referente a sus estudios"></textarea>
                                      </div>
                                      
                                      <div class="tab-pane" id="tab_Observaciones">
                                        <textarea v-model="perfil.notas" class="form-control noresize" rows="10" placeholder="Introduzca cualquier información de desee guardar"></textarea>
                                      </div>
                                      
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                              
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-default" @click="onCanceled()">Cancelar</button>
                                <button class="btn btn-primary" @click="onAccepted()">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
    props: [
      'show'
    ],

    computed: {
      ...mapGetters({ currentUser: 'currentUser'})
    },

    data () {
      return {
        titulo: 'Configura tu perfil',
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
          educacion: 'Estudios de primaria y secundaria',
          notas: 'Tengo que acordarme de...',
          imagen: ''
        }
      }
    },

    methods: {
      onClosed() {
          this.$emit('cerrar');
      },
      onCanceled() {
          // Some save logic goes here...

          this.onClosed()
      },
      onAccepted() {
          // Some save logic goes here...
          console.log("Se ha llamado al metodo salvarDatosPerfil");
          //this.$store.dispatch('savePerfil', this.perfil)

          this.onClosed()
      },
      onFileSelected(event) {
        this.perfil.imagen = event.target.files[0]
        console.log(this.perfil.imagen)
      },
      onUpload(){
        const fd = new FormData()
        fd.append('image',this.perfil.imagen, this.perfil.imagen.name)
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


<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  -webkit-transition: opacity 500ms ease-in;
  -moz-transition: opacity 500ms ease-in;
  transition: opacity 500ms ease-in;
  overflow-y: hidden;
}

.modal-content
{
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  background-color: transparent;
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

.modal-body
{
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  background-color: #FFFFFF;
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

</style>
