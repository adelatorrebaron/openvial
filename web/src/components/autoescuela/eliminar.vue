<template> 
  <div>
    <modal-form-helper
      v-bind:show="show"
      v-bind:title="title"
      v-on:onClosed="onClosed('Cerrado el formulario de edición de la Profesor')" 
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
                        <input v-model="autoescuela.denominacion" type="text" class="form-control" placeholder="Denominación" maxlength="160" required>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                        <label>*Nº Provincial:</label>
                        <input v-model="autoescuela.numero_provincial" type="text" class="form-control" placeholder="Nº Provincial" maxlength="8" required>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                        <label>*Sección:</label>
                        <input v-model="autoescuela.seccion" type="text" class="form-control" placeholder="Sección" maxlength="2" required>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                        <label>*Dígito de control:</label>
                        <input v-model="autoescuela.digito_control" type="text" class="form-control" placeholder="Dígito de control" maxlength="2" required>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                        <label>Nº Secuencial:</label>
                        <input v-model="autoescuela.numero_secuencial" type="text" class="form-control" placeholder="Nº Secuencial" maxlength="2" required>
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
                        <input v-model="autoescuela.direccion.via.tipo" type="text" class="form-control" placeholder="Tipo de vía" maxlength="25" required>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="form-group">
                        <label>*Nombre:</label>
                        <input v-model="autoescuela.direccion.via.nombre" type="text" class="form-control" placeholder="Nombre" maxlength="120" required>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                        <label>*Número:</label>
                        <input v-model="autoescuela.direccion.via.numero" type="text" class="form-control" placeholder="Numero" maxlength="10" required>
                        </div>
                    </div>
                    </div>
                    <div class="row">        
                    <div class="col-md-2">
                        <div class="form-group">
                        <label>Bloque:</label>
                        <input v-model="autoescuela.direccion.via.bloque" type="text" class="form-control" placeholder="Bloque" maxlength="60">
                        </div>
                    </div>        
                    <div class="col-md-2">
                        <div class="form-group">
                        <label>Portal:</label>
                        <input v-model="autoescuela.direccion.via.portal" type="text" class="form-control" placeholder="Portal" maxlength="20">
                        </div>
                    </div> 
                    <div class="col-md-2">
                        <div class="form-group">
                        <label>Escalera:</label>
                        <input v-model="autoescuela.direccion.via.escalera" type="text" class="form-control" placeholder="Escalera" maxlength="20">
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                        <label>Planta:</label>
                        <input v-model="autoescuela.direccion.via.planta" type="text" class="form-control" placeholder="Planta" maxlength="20">
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                        <label>Puerta:</label>
                        <input v-model="autoescuela.direccion.via.puerta" type="text" class="form-control" placeholder="Puerta" maxlength="20">
                        </div>
                    </div>            
                    <div class="col-md-2">
                        <div class="form-group">
                        <label>Kilómetro:</label>
                        <input v-model="autoescuela.direccion.via.kilometro" type="text" class="form-control" placeholder="Kilómetro" maxlength="20">
                        </div>
                    </div>
                    </div>
                    <div class="row">        
                    <div class="col-md-3">
                        <div class="form-group">
                        <label>*Código postal:</label>
                        <input v-model="autoescuela.direccion.codigo_postal" type="text" class="form-control" placeholder="Código postal" maxlength="5" required>
                        </div>
                    </div>        
                    <div class="col-md-3">
                        <div class="form-group">
                        <label>*Población:</label>
                        <input v-model="autoescuela.direccion.poblacion" type="text" class="form-control" placeholder="Población" maxlength="50" required>
                        </div>
                    </div> 
                    <div class="col-md-3">
                        <div class="form-group">
                        <label>*Provincia:</label>
                        <input v-model="autoescuela.direccion.provincia" type="text" class="form-control" placeholder="Provincia" maxlength="50" required>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                        <label>*País:</label>
                        <input v-model="autoescuela.direccion.pais" type="text" class="form-control" placeholder="Pais" maxlength="30" required>
                        </div>
                    </div>
                    </div>
                </div>
                
                <!-- Contacto Tab -->
                <div class="tab-pane" id="tab_Contacto">
                
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

