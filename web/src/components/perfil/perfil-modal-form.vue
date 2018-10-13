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
<!--              <div class="image-preview" v-if="currentUser.perfil.avatar.length > 0">
                <img class="profile-user-img img-responsive img-circle" style="width:150px; height:150px" v-bind:src="currentUser.perfil.avatar" @click="cargarArchivoImagenPerfil()">
              </div>
              <div v-else >-->
                <img class="profile-user-img img-responsive img-circle" style="width:150px; height:150px" @click="$refs.fileInput.click()" v-bind:src="currentUser.perfil.avatar" alt="User profile picture">
                <input type="file" id="imagenPerfil" @change="onFileSelected" ref="fileInput" accept="image/*" style="display: none;" />
              <!--</div> -->
              
              <!-- Username y email -->
              <h3 class="profile-username text-center">{{ currentUser.username }}</h3>
              <p class="text-muted text-center">{{ currentUser.email }}</p>

              <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#tab_Contacto" data-toggle="tab" aria-expanded="true">Contacto</a></li>
                  <li class=""><a href="#tab_Estudios" data-toggle="tab" aria-expanded="false">Estudios</a></li>
                  <li class=""><a href="#tab_Observaciones" data-toggle="tab" aria-expanded="false">Observaciones</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_Contacto">
                    <!-- Contacto Tab -->
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Teléfono móvil:</label>
                          <input v-model="currentUser.perfil.contacto.telefono_movil" name="telefono_movil" v-validate="'digits:9|max:12'" type="text" class="form-control" placeholder="Teléfono móvil" maxlength="12">
                          <span class="help-block">{{ errors.first('telefono_movil') }}</span>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Whatsapp:</label>
                          <input v-model="currentUser.perfil.contacto.whatsapp" name="whatsapp" v-validate="'digits:9|max:12'" type="text" class="form-control" placeholder="Whatsapp" maxlength="12">
                          <span class="help-block">{{ errors.first('whatsapp') }}</span>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Teléfono fijo:</label>
                          <input v-model="currentUser.perfil.contacto.telefono_fijo" name="telefono_fijo" v-validate="'digits:9|max:12'" type="text" class="form-control" placeholder="Teléfono fijo" maxlength="12">
                          <span class="help-block">{{ errors.first('telefono_fijo') }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Sitio web:</label>
                          <input v-model="currentUser.perfil.contacto.website" name="website" v-validate="'max:255'" type="text" class="form-control" placeholder="Sitio web" maxlength="255">
                          <span class="help-block">{{ errors.first('website') }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Facebook:</label>
                          <input v-model="currentUser.perfil.contacto.facebook" name="facebook" v-validate="'max:255'" type="text" class="form-control" placeholder="Facebook" maxlength="255">
                          <span class="help-block">{{ errors.first('facebook') }}</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Twitter:</label>
                          <input v-model="currentUser.perfil.contacto.twitter" name="twitter" v-validate="'max:255'" type="text" class="form-control" placeholder="Twitter" maxlength="255">
                          <span class="help-block">{{ errors.first('twitter') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Estudios Tab -->
                  <div class="tab-pane" id="tab_Estudios">
                    <textarea v-model="currentUser.perfil.educacion" name="estudios" v-validate="'max:255'" class="form-control noresize" rows="10" placeholder="Introduzca información referente a sus estudios" maxlength="255"></textarea>
                    <span class="help-block">{{ errors.first('estudios') }}</span>
                  </div>
                  
                  <!-- Observaciones Tab -->
                  <div class="tab-pane" id="tab_Observaciones">
                    <textarea v-model="currentUser.perfil.notas" name="notas" v-validate="'max:255'" class="form-control noresize" rows="10" placeholder="Introduzca cualquier información de desee guardar" maxlength="255"></textarea>
                    <span class="help-block">{{ errors.first('notas') }}</span>
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
import usuariosApi         from '@/services/api/usuarios.js'
//import axios from 'axios'


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
      imagen_perfil: ''
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
      this.$validator.validateAll()
        .then((result) => {
          // Si hay errores salimos
          if(!result){
            return
          }
          // Si no hay errores procedemos a realizar la operacion
          if (this.action === 'edit'){
            // Paso al Store los datos del formulario para que los actualice en el API
            this.$store.dispatch('updateUsuario', this.currentUser)
          }
          this.$emit('onAccepted')
        })
        .catch(err => {
          console.log(err)
        })
    },


    onFileSelected(event) {
      // Obtengo el fichero seleccionado
      this.imagen_perfil = event.target.files[0]
      // Subo el fichero al servidor
      this.onUpload();
    },


    async onUpload(){
      // Creamos el formulario para enviar el archivo de foto
      const fd = new FormData()
      fd.append('imagenPerfil',this.imagen_perfil, this.imagen_perfil.name)
      fd.append('usuarioId',this.currentUser._id )

      const estado = await usuariosApi.updateUsuarioImagenPerfil(fd)

      // Disporo el state para que se actualicen todas las fotos de perfil de la aplicacion
      this.$store.dispatch('updateImagenPerfilUsuario', estado.result.imagenPerfil)
    }
  }
  
}
</script>


<style scoped>

</style>
