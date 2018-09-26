<template> 
  <div>
    <modal-form-helper
      v-bind:show="show"
      v-bind:title="title"
      v-on:onClosed="onClosed()"
    >
      <div slot="modal-header"></div>
      <div slot="modal-body">
        <div class="row">
          <div class="col-md-12">

            <!-- Imagen del Perfil -->
            <div class="image-preview" v-if="perfil.imagen.length > 0">
              <img class="profile-user-img img-responsive img-circle" :src="perfil.imagen" @click="cargarArchivoImagenPerfil()">
            </div>
            <div v-else >
              <img class="profile-user-img img-responsive img-circle" @click="$refs.fileInput.click()" src="@/assets/user_default.png" alt="User profile picture">
              <input type="file" id="imagenPerfil" @change="onFileSelected" ref="fileInput" accept="image/*" style="display: none;" />
            </div>

            <!-- Username y email -->
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
                  <!-- Contacto Tab -->
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
                
                <!-- Educacion Tab -->
                <div class="tab-pane" id="tab_Educacion">
                  <textarea v-model="perfil.educacion" class="form-control noresize" rows="10" placeholder="Introduzca información referente a sus estudios"></textarea>
                </div>
                
                <!-- Observaciones Tab -->
                <div class="tab-pane" id="tab_Observaciones">
                  <textarea v-model="perfil.notas" class="form-control noresize" rows="10" placeholder="Introduzca cualquier información de desee guardar"></textarea>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div slot="modal-footer">
        <button class="btn btn-default" @click="onCanceled()">Cancelar</button>
        <button class="btn btn-primary" @click="onAccepted()">Aceptar</button>
      </div>
    </modal-form-helper>
  </div>
</template>


<script>
import modalFormMdHelper from '@/components/helpers/modal-form-md-helper'
import { mapGetters } from 'vuex'
import axios from 'axios'


export default {
  components: {
    'modal-form-helper': modalFormMdHelper
  },

  props: [
    'show'
  ],

  computed: {
      ...mapGetters({ currentUser: 'currentUser'})
  },
    
  data () {
    return {
      title: 'Configura tu perfil',
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
      },
    }
  }, 

  methods: {
    onClosed: function () {
      this.$emit('onClosed');
    },
    onCanceled: function () {
      // Some save logic goes here...

      this.onClosed()
    },
    onAccepted: function () {
      console.log("Se ha llamado al metodo salvarDatosPerfil");
      
      // Paso al Store los datos del formulario para que los salve en el API
      this.$store.dispatch('savePerfil', this.perfil)

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

</style>
