<template> 
  <div>
    <modal-form-helper
      v-bind:show="show"          
      v-bind:title="title"
      v-on:onClosed="onClosed()"
    >
      <div slot="modal-header"></div>
      <div slot="modal-body">
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
    }
  }
}
</script>


<style scoped>
</style>