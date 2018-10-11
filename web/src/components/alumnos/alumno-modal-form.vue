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
                <li class=""><a href="#tab_Contacto" data-toggle="tab" aria-expanded="false">Datos de contacto</a></li>
                <li class=""><a href="#tab_Documentacion_aportada" data-toggle="tab" aria-expanded="false">Documentos aportados</a></li>
              </ul>

              <div class="tab-content">
                              
                <div class="tab-pane active" id="tab_Informacion_general">
                  <!-- Informacion general Tab -->
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Dni:</label>
                        <input v-model="alumno.dni" name="dni" v-validate="'required|max:9'" type="text" class="form-control" placeholder="Dni" maxlength="9">
                        <span class="help-block">{{ errors.first('dni') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Fecha caducidad Dni:</label>
                        <input v-model="alumno.dni_fecha_caducidad" name="dni_fecha_caducidad" v-validate="'required|date_format:DD/MM/YYYY'" type="text" class="form-control" placeholder="01/01/2018" maxlength="10">
                        <span class="help-block">{{ errors.first('dni_fecha_caducidad') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Sexo:</label><br>
                        <input type="radio" id="hombre" name="sexo" v-validate="'required'" value="H" v-model="alumno.sexo">
                        <label for="hombre">Hombre&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type="radio" id="Mujer" name="sexo" v-validate="'required'" value="M" v-model="alumno.sexo">
                        <label for="mujer">Mujer</label>
                        <span class="help-block">{{ errors.first('sexo') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Nombre:</label>
                        <input v-model="alumno.nombre" name="nombre" v-validate="'required|max:30'" type="text" class="form-control" placeholder="Nombre" maxlength="30">
                        <span class="help-block">{{ errors.first('nombre') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Primer apellido:</label>
                        <input v-model="alumno.primer_apellido" name="primer_apellido" v-validate="'required|max:30'" type="text" class="form-control" placeholder="Primer apellido" maxlength="30">
                        <span class="help-block">{{ errors.first('primer_apellido') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Segundo apellido:</label>
                        <input v-model="alumno.segundo_apellido" name="segundo_apellido" v-validate="'required|max:30'" type="text" class="form-control" placeholder="Segundo apellido" maxlength="30">
                        <span class="help-block">{{ errors.first('segundo_apellido') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Fecha nacimiento:</label>
                        <input v-model="alumno.fecha_nacimiento" name="fecha_nacimiento" v-validate="'required|date_format:DD/MM/YYYY'" type="text" class="form-control" placeholder="01/01/2018" maxlength="10">
                        <span class="help-block">{{ errors.first('fecha_nacimiento') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*País de nacimiento:</label>
                        <input v-model="alumno.pais_nacimiento" name="pais_nacimiento" v-validate="'required|max:30'" type="text" class="form-control" placeholder="País de nacimiento" maxlength="30">
                        <span class="help-block">{{ errors.first('pais_nacimiento') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Nacionalidad:</label>
                        <input v-model="alumno.nacionalidad" name="nacionalidad" v-validate="'required|max:30'" type="text" class="form-control" placeholder="Nacionalidad" maxlength="30">
                        <span class="help-block">{{ errors.first('nacionalidad') }}</span>
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
                        <input v-model="alumno.direccion.via.tipo" name="tipo" v-validate="'required|max:25'" type="text" class="form-control" placeholder="Tipo de via" maxlength="25">
                        <span class="help-block">{{ errors.first('tipo') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Nombre de la via:</label>
                        <input v-model="alumno.direccion.via.nombre" name="nombre_via" v-validate="'required|max:120'" type="text" class="form-control" placeholder="Nombre de la via" maxlength="120">
                        <span class="help-block">{{ errors.first('nombre_via') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Número:</label>
                        <input v-model="alumno.direccion.via.numero" name="numero" v-validate="'required|max:10'" type="text" class="form-control" placeholder="Numero" maxlength="10">
                        <span class="help-block">{{ errors.first('numero') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Bloque:</label>
                        <input v-model="alumno.direccion.via.bloque" name="bloque" v-validate="'max:60'" type="text" class="form-control" placeholder="Bloque" maxlength="60">
                        <span class="help-block">{{ errors.first('bloque') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Portal:</label>
                        <input v-model="alumno.direccion.via.portal" name="portal" v-validate="'max:20'" type="text" class="form-control" placeholder="Portal" maxlength="20">
                        <span class="help-block">{{ errors.first('portal') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Escalera:</label>
                        <input v-model="alumno.direccion.via.escalera" name="escalera" v-validate="'max:20'" type="text" class="form-control" placeholder="Escalera" maxlength="20">
                        <span class="help-block">{{ errors.first('escalera') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Planta:</label>
                        <input v-model="alumno.direccion.via.planta" name="planta" v-validate="'max:20'" type="text" class="form-control" placeholder="Planta" maxlength="20">
                        <span class="help-block">{{ errors.first('planta') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Puerta:</label>
                        <input v-model="alumno.direccion.via.puerta" name="puerta" v-validate="'max:20'" type="text" class="form-control" placeholder="Puerta" maxlength="20">
                        <span class="help-block">{{ errors.first('puerta') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Kilómetro:</label>
                        <input v-model="alumno.direccion.via.kilometro" name="kilometro" v-validate="'max:20'" type="text" class="form-control" placeholder="Kilometro" maxlength="20">
                        <span class="help-block">{{ errors.first('kilometro') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2">
                      <div class="form-group">
                        <label>*Código Postal:</label>
                        <input v-model="alumno.direccion.codigo_postal" name="codigo_postal" v-validate="'required|digits:5'" type="text" class="form-control" placeholder="Código Postal" maxlength="5">
                        <span class="help-block">{{ errors.first('codigo_postal') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Población:</label>
                        <input v-model="alumno.direccion.poblacion" name="poblacion" v-validate="'required|max:50'" type="text" class="form-control" placeholder="Población" maxlength="50">
                        <span class="help-block">{{ errors.first('poblacion') }}</span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>*Provincia:</label>
                        <input v-model="alumno.direccion.provincia" name="provincia" v-validate="'required|max:50'" type="text" class="form-control" placeholder="Provincia" maxlength="50">
                        <span class="help-block">{{ errors.first('provincia') }}</span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>*País:</label>
                        <input v-model="alumno.direccion.pais" name="pais" v-validate="'required|max:30'" type="text" class="form-control" placeholder="País" maxlength="30">
                        <span class="help-block">{{ errors.first('pais') }}</span>
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
                        <input v-model="alumno.contacto.telefono_fijo" name="telefono_fijo" v-validate="'digits:9'" type="text" class="form-control" placeholder="Teléfono fijo" maxlength="12">
                        <span class="help-block">{{ errors.first('telefono_fijo') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Teléfono móvil:</label>
                        <input v-model="alumno.contacto.telefono_movil" name="telefono_movil" v-validate="'digits:9'" type="text" class="form-control" placeholder="Teléfono móvil" maxlength="12">
                        <span class="help-block">{{ errors.first('telefono_movil') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Whatsapp:</label>
                        <input v-model="alumno.contacto.whatsapp" name="whatsapp" v-validate="'digits:9'" type="text" class="form-control" placeholder="Whatsapp" maxlength="12">
                        <span class="help-block">{{ errors.first('whatsapp') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Email:</label>
                        <input v-model="alumno.contacto.email" name="email" v-validate="'required|email|max:255'" type="text" class="form-control" placeholder="Email" maxlength="255">
                        <span class="help-block">{{ errors.first('email') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Facebook:</label>
                        <input v-model="alumno.contacto.facebook" name="facebook" v-validate="'max:255'" type="text" class="form-control" placeholder="Facebook" maxlength="255">
                        <span class="help-block">{{ errors.first('facebook') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Twitter:</label>
                        <input v-model="alumno.contacto.twitter" name="twitter" v-validate="'max:255'" type="text" class="form-control" placeholder="Twitter" maxlength="255">
                        <span class="help-block">{{ errors.first('twitter') }}</span>
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

      this.$validator.validateAll()
        .then((result) => {
            // Si hay errores salimos
            if(!result){
                return
            }
            // Si no hay errores procedemos a hacer algo

            // Emito el evento que se ha pulsado el boton aceptar.
            this.$emit('onAccepted');
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
  
}
</script>


<style>

</style>
