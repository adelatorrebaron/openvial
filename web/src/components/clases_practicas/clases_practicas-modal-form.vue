<template> 
  <div>
    <modal-form-helper
      v-bind:show="show"
      v-bind:title="title"
      v-on:onClosed="onClosed('Cerrado el formulario de edición de la clase practica')" 
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
                        <label>*Alumno:</label>
                        <select v-model="clase_practica.alumno_id" class="form-control">
                          <option v-for="alumno in alumnos" v-bind:value="alumno._id" v-bind:key="alumno._id">{{alumno.nombre}} {{alumno.primer_apellido}} {{alumno.segundo_nombre}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Profesor:</label>
                        <select v-model="clase_practica.profesor_id" class="form-control">
                          <option v-for="profesor in profesores" v-bind:value="profesor._id" v-bind:key="profesor._id">{{profesor.nombre}} {{profesor.primer_apellido}} {{profesor.segundo_nombre}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Vehiculo:</label>
                        <select v-model="clase_practica.vehiculo_id" class="form-control">
                          <option v-for="vehiculo in vehiculos" v-bind:value="vehiculo._id" v-bind:key="vehiculo._id">{{vehiculo.matricula}} - {{vehiculo.marca}} {{vehiculo.modelo}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Fecha:</label>
                        <input v-model="clase_practica.fecha_clase" type="text" class="form-control" placeholder="01/01/2018" maxlength="10" required>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Hora inicio:</label>
                        <input v-model="clase_practica.hora_inicio" type="text" class="form-control" placeholder="08:00" maxlength="5" required>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Hora de finalización:</label>
                        <input v-model="clase_practica.hora_finalizacion" type="text" class="form-control" placeholder="09:30" maxlength="5" required>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Descripción del recorrido:</label>
                        <textarea v-model="clase_practica.descripcion_recorrido" rows="10" placeholder="Descripcion" maxlength="255" class="form-control noresize"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Errores cometidos por el alumno:</label>
                        <textarea v-model="clase_practica.errores_cometidos_alumno" rows="10" placeholder="Listado de errores" maxlength="255" class="form-control noresize"></textarea>
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
import modalFormLgHelper  from '@/components/helpers/modal-form-lg-helper'

export default {
  components: {
    'modal-form-helper': modalFormLgHelper
  },

  props: [
    'show',
    'title',
    'clase_practica',
    'alumnos',
    'profesores',
    'vehiculos'
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
.noresize {
  resize: none;
}
</style>
