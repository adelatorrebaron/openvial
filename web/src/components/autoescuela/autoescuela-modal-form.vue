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
            <div class="nav-tabs-custom">
              <ul class="nav nav-tabs">
                <li class="active"><a href="#tab_Informacion_general" data-toggle="tab" aria-expanded="true">Información general</a></li>
                <li class=""><a href="#tab_Direccion" data-toggle="tab" aria-expanded="false">Dirección</a></li>
                <li class=""><a href="#tab_Contacto" data-toggle="tab" aria-expanded="false">Datos de Contacto</a></li>
              </ul>

              <div class="tab-content">
                              
                <div class="tab-pane active" id="tab_Informacion_general">
                    <!-- Informacion general Tab -->
                    <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>*Denominación:</label>
                            <input v-model="autoescuela.denominacion" name="denominacion" v-validate="'required|max:160'" type="text" class="form-control" placeholder="Denominación" maxlength="160">
                            <span class="help-block">{{ errors.first('denominacion') }}</span>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>*Nº Provincial:</label>
                            <input v-model="autoescuela.numero_provincial" name="numero provincial" v-validate="'required|max:8'" type="text" class="form-control" placeholder="Nº Provincial" maxlength="8">
                            <span class="help-block">{{ errors.first('numero provincial') }}</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>*Sección:</label>
                            <input v-model="autoescuela.seccion" name="seccion" v-validate="'required|min_value:0|max_value:99'" type="text" class="form-control" placeholder="Sección" maxlength="2">
                            <span class="help-block">{{ errors.first('seccion') }}</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>*Dígito de control:</label>
                            <input v-model="autoescuela.digito_control" name="digito control" v-validate="'required|min_value:0|max_value:99'" type="text" class="form-control" placeholder="Dígito de control" maxlength="2">
                            <span class="help-block">{{ errors.first('digito control') }}</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>Nº Secuencial:</label>
                            <input v-model="autoescuela.numero_secuencial" name="numero secuencial" v-validate="'min_value:0|max_value:99'" type="text" class="form-control" placeholder="Nº Secuencial" maxlength="2">
                            <span class="help-block">{{ errors.first('numero secuencial') }}</span>
                        </div>
                    </div>                                    
                    </div>

                </div>
                
                <!-- Direccion Tab -->
                <div class="tab-pane" id="tab_Direccion">
                    <div class="row">
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>*Tipo de vía:</label>
                            <input v-model="autoescuela.direccion.via.tipo" name="tipo de via" v-validate="'required|max:25'" type="text" class="form-control" placeholder="Tipo de vía" maxlength="25">
                            <span class="help-block">{{ errors.first('tipo de via') }}</span>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="form-group">
                            <label>*Nombre:</label>
                            <input v-model="autoescuela.direccion.via.nombre" name="nombre de via" v-validate="'required|max:120'" type="text" class="form-control" placeholder="Nombre" maxlength="120">
                            <span class="help-block">{{ errors.first('nombre de via') }}</span>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>*Número:</label>
                            <input v-model="autoescuela.direccion.via.numero" name="numero" v-validate="'required|max:10'" type="text" class="form-control" placeholder="Numero" maxlength="10">
                            <span class="help-block">{{ errors.first('numero') }}</span>
                        </div>
                    </div>
                    </div>
                    <div class="row">        
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Bloque:</label>
                            <input v-model="autoescuela.direccion.via.bloque" name="bloque" v-validate="'max:60'" type="text" class="form-control" placeholder="Bloque" maxlength="60">
                            <span class="help-block">{{ errors.first('bloque') }}</span>
                        </div>
                    </div>        
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Portal:</label>
                            <input v-model="autoescuela.direccion.via.portal" name="portal" v-validate="'max:20'" type="text" class="form-control" placeholder="Portal" maxlength="20">
                            <span class="help-block">{{ errors.first('portal') }}</span>
                        </div>
                    </div> 
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Escalera:</label>
                            <input v-model="autoescuela.direccion.via.escalera" name="escalera" v-validate="'max:20'" type="text" class="form-control" placeholder="Escalera" maxlength="20">
                            <span class="help-block">{{ errors.first('escalera') }}</span>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Planta:</label>
                            <input v-model="autoescuela.direccion.via.planta" name="planta" v-validate="'max:20'" type="text" class="form-control" placeholder="Planta" maxlength="20">
                            <span class="help-block">{{ errors.first('planta') }}</span>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Puerta:</label>
                            <input v-model="autoescuela.direccion.via.puerta" name="puerta" v-validate="'max:20'" type="text" class="form-control" placeholder="Puerta" maxlength="20">
                            <span class="help-block">{{ errors.first('puerta') }}</span>
                        </div>
                    </div>            
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Kilómetro:</label>
                            <input v-model="autoescuela.direccion.via.kilometro" name="kilometro" v-validate="'max:20'" type="text" class="form-control" placeholder="Kilómetro" maxlength="20">
                            <span class="help-block">{{ errors.first('kilometro') }}</span>
                        </div>
                    </div>
                    </div>
                    <div class="row">        
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>*Código postal:</label>
                            <input v-model="autoescuela.direccion.codigo_postal" name="codigo postal" v-validate="'required|digits:5'" type="text" class="form-control" placeholder="Código postal" maxlength="5">
                            <span class="help-block">{{ errors.first('codigo postal') }}</span>
                        </div>
                    </div>        
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>*Población:</label>
                            <input v-model="autoescuela.direccion.poblacion" name="poblacion" v-validate="'required|max:50'" type="text" class="form-control" placeholder="Población" maxlength="50">
                            <span class="help-block">{{ errors.first('poblacion') }}</span>
                        </div>
                    </div> 
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>*Provincia:</label>
                            <input v-model="autoescuela.direccion.provincia" name="provincia" v-validate="'required|max:50'" type="text" class="form-control" placeholder="Provincia" maxlength="50">
                            <span class="help-block">{{ errors.first('provincia') }}</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>*País:</label>
                            <input v-model="autoescuela.direccion.pais" name="pais" v-validate="'required|max:30'" type="text" class="form-control" placeholder="Pais" maxlength="30">
                            <span class="help-block">{{ errors.first('pais') }}</span>
                        </div>
                    </div>
                    </div>
                </div>
                
                <!-- Contacto Tab -->
                <div class="tab-pane" id="tab_Contacto">
                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>*Correo electrónico:</label>
                            <input v-model="autoescuela.contacto.email" name="correo electronico" v-validate="'required|email|max:255'" type="text" class="form-control" placeholder="Correo electrónico" maxlength="255">
                            <span class="help-block">{{ errors.first('correo electronico') }}</span>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Teléfono fijo:</label>
                            <input v-model="autoescuela.contacto.telefono_fijo" name="telefono fijo" v-validate="'digits:9'" type="text" class="form-control" placeholder="Teléfono fijo" maxlength="12">
                            <span class="help-block">{{ errors.first('telefono fijo') }}</span>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Teléfono móvil:</label>
                            <input v-model="autoescuela.contacto.telefono_movil" name="telefono movil" v-validate="'digits:9'" type="text" class="form-control" placeholder="Teléfono móvil" maxlength="12">
                            <span class="help-block">{{ errors.first('telefono movil') }}</span>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Whatsapp:</label>
                            <input v-model="autoescuela.contacto.whatsapp" name="whatsapp" v-validate="'digits:9'" type="text" class="form-control" placeholder="Whatsapp" maxlength="12">
                            <span class="help-block">{{ errors.first('whatsapp') }}</span>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Sitio web:</label>
                            <input v-model="autoescuela.contacto.website" name="website" v-validate="'max:255'" type="text" class="form-control" placeholder="Sitio web" maxlength="255">
                            <span class="help-block">{{ errors.first('website') }}</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Facebook:</label>
                            <input v-model="autoescuela.contacto.facebook" name="facebook" v-validate="'max:255'" type="text" class="form-control" placeholder="Facebook" maxlength="255">
                            <span class="help-block">{{ errors.first('facebook') }}</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Twitter:</label>
                            <input v-model="autoescuela.contacto.twitter" name="twitter" v-validate="'max:255'" type="text" class="form-control" placeholder="Twitter" maxlength="255">
                            <span class="help-block">{{ errors.first('twitter') }}</span>
                        </div>
                    </div>
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
import modalFormLgHelper            from '@/components/helpers/modal-form-lg-helper'
import { mapGetters }               from 'vuex'

export default {
  components: {
    'modal-form-helper': modalFormLgHelper
  },
  props: [
    'show',
    'title',
    'action',
    'autoescuela'
  ],
  computed: {
    ...mapGetters({ currentUser: 'currentUser'})
  },
  data () {
    return {
    }
  },
  methods: {
    onClosed: function () {
        this.$emit('onClosed');
    },

    onCanceled: function () {
        this.$emit('onCanceled');
    },

    onAccepted: function () {

      this.$validator.validateAll()
        .then((result) => {
            // Si hay errores salimos
            if(!result){
                return
            }
            
            // Si no hay errores procedemos a registral al usuario
            if (this.action === 'create'){
                // Debido a que el usuario está en el store y no se encuentra en el formulario
                // Lo leemos del Store y se lo asignamos a la academia para que cuando se cree
                // se asocie a este usuario
                this.autoescuela.usuario_id = this.currentUser._id
                
                // Paso al Store los datos del formulario para que los salve en el API
                this.$store.dispatch('saveAutoescuela', this.autoescuela)
            }
            else if (this.action === 'edit'){
                // Paso al Store los datos del formulario para que los actualice en el API
                this.$store.dispatch('updateAutoescuela', this.autoescuela)
            }

            // Emito el evento que se ha pulsado el boton aceptar.
            this.$emit('onAccepted');
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>


<style scoped>
</style>