<template> 
  <div>
    <modal-form-helper
      v-bind:show="show"
      v-bind:title="title"
      v-on:onClosed="onClosed('Cerrado el formulario de edición de la Autoescuela')" 
    >
      <div slot="modal-header"></div>
      <div slot="modal-body">
        <div class="row">
          <div class="col-md-12">

            <!-- Imagen del Perfil -->
            <div class="image-preview" v-if="currentUser.perfil.avatar.length > 0">
              <img class="profile-user-img img-responsive img-circle" :src="currentUser.perfil.avatar" @click="cargarArchivoImagenPerfil()">
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
                        <input v-model="currentUser.perfil.contacto.telefono_movil" type="text" class="form-control" placeholder="Teléfono móvil">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Whatsapp:</label>
                        <input v-model="currentUser.perfil.contacto.whatsapp" type="text" class="form-control" placeholder="Whatsapp">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Teléfono fijo:</label>
                        <input v-model="currentUser.perfil.contacto.telefono_fijo" type="text" class="form-control" placeholder="Teléfono fijo">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Sitio web:</label>
                        <input v-model="currentUser.perfil.contacto.website" type="text" class="form-control" placeholder="Sitio web">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Facebook:</label>
                        <input v-model="currentUser.perfil.contacto.facebook" type="text" class="form-control" placeholder="Facebook">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Twitter:</label>
                        <input v-model="currentUser.perfil.contacto.twitter" type="text" class="form-control" placeholder="Twitter">
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Educacion Tab -->
                <div class="tab-pane" id="tab_Educacion">
                  <textarea v-model="currentUser.perfil.educacion" class="form-control noresize" rows="10" placeholder="Introduzca información referente a sus estudios"></textarea>
                </div>
                
                <!-- Observaciones Tab -->
                <div class="tab-pane" id="tab_Observaciones">
                  <textarea v-model="currentUser.perfil.notas" class="form-control noresize" rows="10" placeholder="Introduzca cualquier información de desee guardar"></textarea>
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
    'show',
    'title',
    'action'
  ],

  computed: {
    ...mapGetters({ currentUser: 'currentUser'})
  },
    
  data () {
    return {
    }
  },

  created () {
  },

  updated () {
  },

  methods: {
    onClosed: function () {
      this.$emit('onClosed');
    },
    onCanceled: function () {
      this.$emit('onCanceled')
    },
    onAccepted: function () {
      if (this.action === 'edit'){
        // Paso al Store los datos del formulario para que los actualice en el API
        this.$store.dispatch('updateUsuario', this.currentUser)
      }
      this.$emit('onAccepted')
    },
    onFileSelected(event) {
      /*
      this.perfil.imagen = event.target.files[0]
      console.log(this.perfil.imagen)
      */
    },
    onUpload(){
      /*
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
      */
    }
  }
  
}
</script>


<style scoped>

</style>
