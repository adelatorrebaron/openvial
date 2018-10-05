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
                        <input v-model="vehiculo.matricula" type="text" class="form-control" placeholder="Matricula" maxlength="10" required>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Marca:</label>
                        <input v-model="vehiculo.marca" type="text" class="form-control" placeholder="Marca" maxlength="150">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Modelo:</label>
                        <input v-model="vehiculo.modelo" type="text" class="form-control" placeholder="Modelo" maxlength="150">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Cilindrada:</label>
                        <input v-model="vehiculo.cilindrada" type="text" class="form-control" placeholder="Cilindrada" maxlength="10">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Color:</label>
                        <input v-model="vehiculo.color" type="text" class="form-control" placeholder="Color" maxlength="25">
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
      this.$emit('onAccepted')
    },
  }
  
}
</script>


<style>

</style>
