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
            <!--
            <div class="image-preview" v-if="currentUser.perfil.avatar.length > 0">
              <img class="profile-user-img img-responsive img-circle" :src="currentUser.perfil.avatar" @click="cargarArchivoImagenPerfil()">
            </div>
            <div v-else >
              <img class="profile-user-img img-responsive img-circle" @click="$refs.fileInput.click()" src="@/assets/user_default.png" alt="User profile picture">
              <input type="file" id="imagenPerfil" @change="onFileSelected" ref="fileInput" accept="image/*" style="display: none;" />
            </div>
            -->
            <!-- Username y email -->
            <!--
            <h3 class="profile-username text-center">{{ alumno.nombre }} {{ alumno.primer_apellido }} {{ alumno.segundo_apellido }}</h3>
            <p class="text-muted text-center">{{ alumno.dni }}</p>
            -->

            <div class="nav-tabs-custom">
              <ul class="nav nav-tabs">
                <li class="active"><a href="#tab_Informacion_general" data-toggle="tab" aria-expanded="true">Información general</a></li>
                <li class=""><a href="#tab_Direccion" data-toggle="tab" aria-expanded="false">Dirección</a></li>
                <li class=""><a href="#tab_Contacto" data-toggle="tab" aria-expanded="false">Datos de Contacto</a></li>
                <li class=""><a href="#tab_Documentacion_aportada" data-toggle="tab" aria-expanded="false">Documentos aportados</a></li>
              </ul>

              <div class="tab-content">
                              
                <div class="tab-pane active" id="tab_Informacion_general">
                  <!-- Informacion general Tab -->
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Dni:</label>
                        <input v-model="alumno.dni" type="text" class="form-control" placeholder="Dni" required>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Fecha caducidad Dni:</label>
                        <input v-model="alumno.dni_fecha_caducidad" type="text" class="form-control" placeholder="01/01/2018" required>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Sexo:</label><br>
                        <input type="radio" id="hombre" value="H" v-model="alumno.sexo">
                        <label for="hombre">Hombre&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type="radio" id="Mujer" value="M" v-model="alumno.sexo">
                        <label for="mujer">Mujer</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Nombre:</label>
                        <input v-model="alumno.nombre" type="text" class="form-control" placeholder="Nombre" required>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Primer apellido:</label>
                        <input v-model="alumno.primer_apellido" type="text" class="form-control" placeholder="Primer apellido" required>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Segundo apellido:</label>
                        <input v-model="alumno.segundo_apellido" type="text" class="form-control" placeholder="Segundo apellido" required>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Fecha nacimiento:</label>
                        <input v-model="alumno.fecha_nacimiento" type="text" class="form-control" placeholder="01/01/2018" required>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*País de nacimiento:</label>
                        <input v-model="alumno.pais_nacimiento" type="text" class="form-control" placeholder="País de nacimiento" required>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Nacionalidad:</label>
                        <input v-model="alumno.nacionalidad" type="text" class="form-control" placeholder="Nacionalidad" required>
                      </div>
                    </div>                    
                  </div>
                </div>
                
                <!-- Direccion Tab -->
                <div class="tab-pane" id="tab_Direccion">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Tipo de via:</label>
                        <input v-model="alumno.direccion.via.tipo" type="text" class="form-control" placeholder="Tipo de via" required>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Nombre de la via:</label>
                        <input v-model="alumno.direccion.via.nombre" type="text" class="form-control" placeholder="Nombre de la via" required>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Número:</label>
                        <input v-model="alumno.direccion.via.numero" type="text" class="form-control" placeholder="Numero" required>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Bloque:</label>
                        <input v-model="alumno.direccion.via.bloque" type="text" class="form-control" placeholder="Bloque">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Portal:</label>
                        <input v-model="alumno.direccion.via.portal" type="text" class="form-control" placeholder="Portal">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Escalera:</label>
                        <input v-model="alumno.direccion.via.escalera" type="text" class="form-control" placeholder="Escalera">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Planta:</label>
                        <input v-model="alumno.direccion.via.planta" type="text" class="form-control" placeholder="Planta">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Puerta:</label>
                        <input v-model="alumno.direccion.via.puerta" type="text" class="form-control" placeholder="Puerta">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Kilómetro:</label>
                        <input v-model="alumno.direccion.via.kilometro" type="text" class="form-control" placeholder="Kilometro">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2">
                      <div class="form-group">
                        <label>*Código Postal:</label>
                        <input v-model="alumno.direccion.codigo_postal" type="text" class="form-control" placeholder="Código Postal" required>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Población:</label>
                        <input v-model="alumno.direccion.poblacion" type="text" class="form-control" placeholder="Población" required>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>*Provincia:</label>
                        <input v-model="alumno.direccion.provincia" type="text" class="form-control" placeholder="Provincia" required>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>*País:</label>
                        <input v-model="alumno.direccion.pais" type="text" class="form-control" placeholder="País" required>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Contacto Tab -->
                <div class="tab-pane" id="tab_Contacto">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Teléfono fijo:</label>
                        <input v-model="alumno.contacto.telefono_fijo" type="text" class="form-control" placeholder="Teléfono fijo">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Teléfono móvil:</label>
                        <input v-model="alumno.contacto.telefono_movil" type="text" class="form-control" placeholder="Teléfono móvil">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Whatsapp:</label>
                        <input v-model="alumno.contacto.whatsapp" type="text" class="form-control" placeholder="Whatsapp">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Email:</label>
                        <input v-model="alumno.contacto.email" type="text" class="form-control" placeholder="Email">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Facebook:</label>
                        <input v-model="alumno.contacto.facebook" type="text" class="form-control" placeholder="Facebook">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Twitter:</label>
                        <input v-model="alumno.contacto.twitter" type="text" class="form-control" placeholder="Twitter">
                      </div>
                    </div>
                  </div>                  
                </div>
                
                <!-- Documentacion aportada Tab -->
                <div class="tab-pane" id="tab_Documentacion_aportada">
                  <div>
                    <div class="box-body no-padding">
                      <table class="table table-condensed">
                        <tbody><tr>
                          <th>Documentación</th>
                          <th style="width: 60px">Si</th>
                          <th style="width: 60px">No</th>
                        </tr>
                        <tr>
                          <td>Entrega fotocopia del Dni</td>
                          <td>
                            <input type="radio" id="entrega_fotocopia_dni" value="true" v-model="alumno.documentacion_aportada.entrega_fotocopia_dni">
                          </td>
                          <td>
                            <input type="radio" id="entrega_fotocopia_dni" value="false" v-model="alumno.documentacion_aportada.entrega_fotocopia_dni">
                          </td>
                        </tr>
                        <tr>
                          <td>Entrega psicotécnico</td>
                          <td>
                            <input type="radio" id="entrega_psicotecnico" value="true" v-model="alumno.documentacion_aportada.entrega_psicotecnico">
                          </td>
                          <td>
                            <input type="radio" id="entrega_psicotecnico" value="false" v-model="alumno.documentacion_aportada.entrega_psicotecnico">
                          </td>
                        </tr>
                        <tr>
                          <td>Entrega fotografías</td>
                          <td>
                            <input type="radio" id="entrega_fotografias" value="true" v-model="alumno.documentacion_aportada.entrega_fotografias">
                          </td>
                          <td>
                            <input type="radio" id="entrega_fotografias" value="false" v-model="alumno.documentacion_aportada.entrega_fotografias">
                          </td>
                        </tr>
                        <tr>
                          <td>Firma tasas examen</td>
                          <td>
                            <input type="radio" id="firma_tasas_examen" value="true" v-model="alumno.documentacion_aportada.firma_tasas_examen">
                          </td>
                          <td>
                            <input type="radio" id="firma_tasas_examen" value="false" v-model="alumno.documentacion_aportada.firma_tasas_examen">
                          </td>
                        </tr>
                        <tr>
                          <td>Firma autorización</td>
                          <td>
                            <input type="radio" id="firma_autorizacion" value="true" v-model="alumno.documentacion_aportada.firma_autorizacion">
                          </td>
                          <td>
                            <input type="radio" id="firma_autorizacion" value="false" v-model="alumno.documentacion_aportada.firma_autorizacion">
                          </td>
                        </tr>
                        <tr>
                          <td>Firma talón foto</td>
                          <td>
                            <input type="radio" id="firma_talon_foto" value="true" v-model="alumno.documentacion_aportada.firma_talon_foto">
                          </td>
                          <td>
                            <input type="radio" id="firma_talon_foto" value="false" v-model="alumno.documentacion_aportada.firma_talon_foto">
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
                    <!-- /.box-body -->
                  </div>
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
import modalFormLgHelper  from '@/components/helpers/modal-form-lg-helper'

export default {
  components: {
    'modal-form-helper': modalFormLgHelper
  },

  props: [
    'show',
    'title',
    'alumno'
  ],
    
  data () {
    return {
    }
  },

  methods: {
    onClosed: function () {
      this.$emit('onClosed');
    },

    onCanceled: function () {
      this.$emit('onCanceled')
    },

    onAccepted: function () {
      this.$emit('onAccepted')
    },
  }
  
}
</script>


<style>

</style>
