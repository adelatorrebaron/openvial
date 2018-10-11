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
                        <select v-model="clase_practica.alumno_id" name="alumno" v-validate="'required'" class="form-control">
                          <option v-for="alumno in alumnos" v-bind:value="alumno._id" v-bind:key="alumno._id">{{alumno.nombre}} {{alumno.primer_apellido}} {{alumno.segundo_nombre}}</option>
                        </select>
                        <span class="help-block">{{ errors.first('alumno') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Profesor:</label>
                        <select v-model="clase_practica.profesor_id" name="profesor" v-validate="'required'" class="form-control">
                          <option v-for="profesor in profesores" v-bind:value="profesor._id" v-bind:key="profesor._id">{{profesor.nombre}} {{profesor.primer_apellido}} {{profesor.segundo_nombre}}</option>
                        </select>
                        <span class="help-block">{{ errors.first('profesor') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Vehiculo:</label>
                        <select v-model="clase_practica.vehiculo_id" name="vehiculo" v-validate="'required'" class="form-control">
                          <option v-for="vehiculo in vehiculos" v-bind:value="vehiculo._id" v-bind:key="vehiculo._id">{{vehiculo.matricula}} - {{vehiculo.marca}} {{vehiculo.modelo}}</option>
                        </select>
                        <span class="help-block">{{ errors.first('vehiculo') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Fecha:</label>
                        <input v-model="clase_practica.fecha_clase" name="fecha" v-validate="'required|date_format:DD/MM/YYYY'" type="text" class="form-control" placeholder="01/01/2018" maxlength="10" required>
                        <span class="help-block">{{ errors.first('fecha') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Hora inicio:</label>
                        <input v-model="clase_practica.hora_inicio" name="hora de inicio" v-validate="'required|time'" type="text" class="form-control" placeholder="08:00" maxlength="5" required>
                        <span class="help-block">{{ errors.first('hora de inicio') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Hora de finalización:</label>
                        <input v-model="clase_practica.hora_finalizacion" name="hora de finalizacion" v-validate="'required|time'" type="text" class="form-control" placeholder="09:30" maxlength="5" required>
                        <span class="help-block">{{ errors.first('hora de finalizacion') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Descripción del recorrido:</label>
                        <textarea v-model="clase_practica.descripcion_recorrido" name="descripcion_recorrido" v-validate="'max:255'" rows="10" placeholder="Descripcion" maxlength="255" class="form-control noresize"></textarea>
                        <span class="help-block">{{ errors.first('descripcion_recorrido') }}</span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Errores cometidos por el alumno:</label>
                        <textarea v-model="clase_practica.errores_cometidos_alumno" name="errores_cometidos_alumno" v-validate="'max:255'" rows="10" placeholder="Listado de errores" maxlength="255" class="form-control noresize"></textarea>
                        <span class="help-block">{{ errors.first('errores_cometidos_alumno') }}</span>
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
.noresize {
  resize: none;
}
</style>
