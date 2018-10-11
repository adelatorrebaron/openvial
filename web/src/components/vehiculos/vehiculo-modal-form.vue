<template> 
  <div>
    <modal-form-helper
      v-bind:show="show"
      v-bind:title="title"
      v-on:onClosed="onClosed('Cerrado el formulario de edición de la Vehiculos')" 
    >
      <div slot="modal-header"></div>
      <div slot="modal-body">
        <div class="row">
          <div class="col-md-12">

            <div class="nav-tabs-custom">
              <ul class="nav nav-tabs">
                <li class="active"><a href="#tab_Informacion_general" data-toggle="tab" aria-expanded="true">Información general</a></li>
              </ul>

              <div class="tab-content">
                              
                <div class="tab-pane active" id="tab_Informacion_general">
                  <!-- Informacion general Tab -->
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Matricula:</label>
                        <input v-model="vehiculo.matricula" name="matricula" v-validate="'required|max:10'" type="text" class="form-control" placeholder="Matricula" maxlength="10">
                        <span class="help-block">{{ errors.first('matricula') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Marca:</label>
                        <input v-model="vehiculo.marca" name="marca" v-validate="'max:150'" type="text" class="form-control" placeholder="Marca" maxlength="150">
                        <span class="help-block">{{ errors.first('marca') }}</span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Modelo:</label>
                        <input v-model="vehiculo.modelo" name="modelo" v-validate="'max:150'" type="text" class="form-control" placeholder="Modelo" maxlength="150">
                        <span class="help-block">{{ errors.first('modelo') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Cilindrada:</label>
                        <input v-model="vehiculo.cilindrada" name="cilindrada" v-validate="'max:10'" type="text" class="form-control" placeholder="Cilindrada" maxlength="10">
                        <span class="help-block">{{ errors.first('cilindrada') }}</span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Color:</label>
                        <input v-model="vehiculo.color" name="color" v-validate="'max:25'" type="text" class="form-control" placeholder="Color" maxlength="25">
                        <span class="help-block">{{ errors.first('color') }}</span>
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
import modalFormMdHelper  from '@/components/helpers/modal-form-md-helper'

export default {
  components: {
    'modal-form-helper': modalFormMdHelper
  },

  props: [
    'show',
    'title',
    'vehiculo'
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
            // Emito el evento que se ha pulsado el boton aceptar.
            this.$emit('onAccepted')
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
