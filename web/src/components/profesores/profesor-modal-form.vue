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
                <li class=""><a href="#tab_Contacto" data-toggle="tab" aria-expanded="false">Datos de contacto</a></li>
                <li class=""><a href="#tab_Permisos_conduccion" data-toggle="tab" aria-expanded="false">Permisos conducción</a></li>
                <li class=""><a href="#tab_Datos_bancarios" data-toggle="tab" aria-expanded="false">Datos bancarios</a></li>
              </ul>

              <div class="tab-content">
                              
                <div class="tab-pane active" id="tab_Informacion_general">
                  <!-- Informacion general Tab -->
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>*Numero de profesor:</label>
                        <input v-model="profesor.numero_profesor" name="numero de profesor" v-validate="'required|max:30'" type="text" class="form-control" placeholder="Número de profesor" maxlength="30">
                        <span class="help-block">{{ errors.first('numero de profesor') }}</span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>*Dni:</label>
                        <input v-model="profesor.dni" name="dni" v-validate="'required|max:9'" type="text" class="form-control" placeholder="Dni" maxlength="9">
                        <span class="help-block">{{ errors.first('dni') }}</span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>*Fecha caducidad Dni:</label>
                        <input v-model="profesor.dni_fecha_caducidad" name="fecha caducidad dni" v-validate="'required|date_format:DD/MM/YYYY'" type="text" class="form-control" placeholder="01/01/2018" maxlength="10">
                        <span class="help-block">{{ errors.first('fecha caducidad dni') }}</span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>*Sexo:</label><br>
                        <input type="radio" id="hombre" name="sexo" v-validate="'required'" value="H" v-model="profesor.sexo">
                        <label for="hombre">Hombre&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type="radio" id="Mujer" name="sexo" v-validate="'required'" value="M" v-model="profesor.sexo">
                        <label for="mujer">Mujer</label>
                        <span class="help-block">{{ errors.first('sexo') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Nombre:</label>
                        <input v-model="profesor.nombre" name="nombre" v-validate="'required|max:30'" type="text" class="form-control" placeholder="Nombre" maxlength="30">
                        <span class="help-block">{{ errors.first('nombre') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Primer apellido:</label>
                        <input v-model="profesor.primer_apellido" name="primer apellido" v-validate="'required|max:30'" type="text" class="form-control" placeholder="Primer apellido" maxlength="30">
                        <span class="help-block">{{ errors.first('primer apellido') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Segundo apellido:</label>
                        <input v-model="profesor.segundo_apellido" name="segundo apellido" v-validate="'required|max:30'" type="text" class="form-control" placeholder="Segundo apellido" maxlength="30">
                        <span class="help-block">{{ errors.first('segundo apellido') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Fecha nacimiento:</label>
                        <input v-model="profesor.fecha_nacimiento" name="fecha de nacimiento" v-validate="'required|date_format:DD/MM/YYYY'" type="text" class="form-control" placeholder="01/01/2018" maxlength="10">
                        <span class="help-block">{{ errors.first('fecha de nacimiento') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*País de nacimiento:</label>
                        <input v-model="profesor.pais_nacimiento" name="pais de nacimiento" v-validate="'required|max:30'" type="text" class="form-control" placeholder="País de nacimiento" maxlength="30">
                        <span class="help-block">{{ errors.first('pais de nacimiento') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Nacionalidad:</label>
                        <input v-model="profesor.nacionalidad" name="nacionalidad" v-validate="'required|max:30'" type="text" class="form-control" placeholder="Nacionalidad" maxlength="30">
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
                        <input v-model="profesor.direccion.via.tipo" name="tipo de via" v-validate="'required|max:25'" type="text" class="form-control" placeholder="Tipo de via" maxlength="25">
                        <span class="help-block">{{ errors.first('tipo de via') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Nombre de la via:</label>
                        <input v-model="profesor.direccion.via.nombre" name="nombre de via" v-validate="'required|max:120'" type="text" class="form-control" placeholder="Nombre de la via" maxlength="120">
                        <span class="help-block">{{ errors.first('nombre de via') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Número:</label>
                        <input v-model="profesor.direccion.via.numero" name="numero" v-validate="'required|max:10'" type="text" class="form-control" placeholder="Numero" maxlength="10">
                        <span class="help-block">{{ errors.first('numero') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Bloque:</label>
                        <input v-model="profesor.direccion.via.bloque" name="bloque" v-validate="'max:60'" type="text" class="form-control" placeholder="Bloque" maxlength="60">
                        <span class="help-block">{{ errors.first('bloque') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Portal:</label>
                        <input v-model="profesor.direccion.via.portal" name="portal" v-validate="'max:20'" type="text" class="form-control" placeholder="Portal" maxlength="20">
                        <span class="help-block">{{ errors.first('portal') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Escalera:</label>
                        <input v-model="profesor.direccion.via.escalera" name="escalera" v-validate="'max:20'" type="text" class="form-control" placeholder="Escalera" maxlength="20">
                        <span class="help-block">{{ errors.first('escalera') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Planta:</label>
                        <input v-model="profesor.direccion.via.planta" name="planta" v-validate="'max:20'" type="text" class="form-control" placeholder="Planta" maxlength="20">
                        <span class="help-block">{{ errors.first('planta') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Puerta:</label>
                        <input v-model="profesor.direccion.via.puerta" name="puerta" v-validate="'max:20'" type="text" class="form-control" placeholder="Puerta" maxlength="20">
                        <span class="help-block">{{ errors.first('puerta') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Kilómetro:</label>
                        <input v-model="profesor.direccion.via.kilometro" name="kilometro" v-validate="'max:20'" type="text" class="form-control" placeholder="Kilometro" maxlength="20">
                        <span class="help-block">{{ errors.first('kilometro') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2">
                      <div class="form-group">
                        <label>*Código Postal:</label>
                        <input v-model="profesor.direccion.codigo_postal" name="codigo postal" v-validate="'required|digits:5'" type="text" class="form-control" placeholder="Código Postal" maxlength="5">
                        <span class="help-block">{{ errors.first('codigo postal') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Población:</label>
                        <input v-model="profesor.direccion.poblacion" name="poblacion" v-validate="'required|max:50'" type="text" class="form-control" placeholder="Población" maxlength="50">
                        <span class="help-block">{{ errors.first('poblacion') }}</span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>*Provincia:</label>
                        <input v-model="profesor.direccion.provincia" name="provincia" v-validate="'required|max:50'" type="text" class="form-control" placeholder="Provincia" maxlength="50">
                        <span class="help-block">{{ errors.first('provincia') }}</span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>*País:</label>
                        <input v-model="profesor.direccion.pais" name="pais" v-validate="'required|max:30'" type="text" class="form-control" placeholder="País" maxlength="30">
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
                        <input v-model="profesor.contacto.telefono_fijo" name="telefono fijo" v-validate="'digits:9'" type="text" class="form-control" placeholder="Teléfono fijo" maxlength="12">
                        <span class="help-block">{{ errors.first('telefono fijo') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>*Teléfono móvil:</label>
                        <input v-model="profesor.contacto.telefono_movil" name="telefono movil" v-validate="'required|digits:9'" type="text" class="form-control" placeholder="Teléfono móvil" maxlength="12">
                        <span class="help-block">{{ errors.first('telefono movil') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Whatsapp:</label>
                        <input v-model="profesor.contacto.whatsapp" name="whatsapp" v-validate="'digits:9'" type="text" class="form-control" placeholder="Whatsapp" maxlength="12">
                        <span class="help-block">{{ errors.first('whatsapp') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Correo electronico:</label>
                        <input v-model="profesor.contacto.email" name="correo electronico" v-validate="'email|max:255'" type="text" class="form-control" placeholder="Email" maxlength="255">
                        <span class="help-block">{{ errors.first('correo electronico') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Facebook:</label>
                        <input v-model="profesor.contacto.facebook" name="facebook" v-validate="'max:255'" type="text" class="form-control" placeholder="Facebook" maxlength="255">
                        <span class="help-block">{{ errors.first('facebook') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Twitter:</label>
                        <input v-model="profesor.contacto.twitter" name="twitter" v-validate="'max:255'" type="text" class="form-control" placeholder="Twitter" maxlength="255">
                        <span class="help-block">{{ errors.first('twitter') }}</span>
                      </div>
                    </div>
                  </div>                  
                </div>
                
                <!-- Permisos de conduccion Tab -->
                <div class="tab-pane" id="tab_Permisos_conduccion">
                  <div>
                    <div class="box-body table-responsive no-padding">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th>Tipo</th>
                            <th>Fecha de antiguedad</th>
                            <th>Fecha de caducidad</th>
                            <th style="width:180px"></th>
                          </tr>
                          <tr>
                            <td>
                              <select v-model="newPermiso.tipo" class="form-control">
                                <option v-for="tipo_permiso in tipos_de_permisos" v-bind:key="tipo_permiso.tipo">{{tipo_permiso.tipo}}</option>
                              </select>
                            </td>
                            <td>
                              <input v-model="newPermiso.fecha_antiguedad" name="fecha de antiguedad" v-validate="'date_format:DD/MM/YYYY'" type="text" class="form-control" placeholder="01/01/2018" maxlength="10">
                              <span class="help-block">{{ errors.first('fecha de antiguedad') }}</span>
                            </td>
                            <td>
                              <input v-model="newPermiso.fecha_caducidad" name="fecha de caducidad" v-validate="'date_format:DD/MM/YYYY'" type="text" class="form-control" placeholder="01/02/019" maxlength="10">
                              <span class="help-block">{{ errors.first('fecha de caducidad') }}</span>
                            </td>
                            <td>
                              <div class="pull-right">
                                <button v-if="!editMode" type="button" class="btn btn-primary" @click.prevent="createPermiso(newPermiso)">Añadir</button>
                                <div v-if="editMode">
                                  <button type="button" class="btn btn-primary" @click.prevent="acceptEditPermiso()">Aceptar</button>
                                  <button type="button" class="btn btn-default" @click.prevent="cancelEditPermiso()">Cancelar</button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-if="profesor.permisos_conduccion" v-for="(permiso, index) in profesor.permisos_conduccion">
                            <td>{{ permiso.tipo }}</td>
                            <td>{{ permiso.fecha_antiguedad }}</td>
                            <td>{{ permiso.fecha_caducidad }}</td>
                            <td>
                              <div v-if="!editMode" class="pull-right">
                                <button type="button" class="btn btn-primary btn-sm" @click.prevent="populatePermisoToEdit(index)"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-danger btn-sm" @click.prevent="deletePermiso(index)"><i class="fa fa-remove"></i></button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                            
                <!-- Datos bancarios Tab -->
                <div class="tab-pane" id="tab_Datos_bancarios">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Nombre entidad:</label>
                        <input v-model="profesor.datos_bancarios.nombre_entidad" name="nombre_entidad" v-validate="'max:30'" type="text" class="form-control" placeholder="Nombre entidad" maxlength="30">
                        <span class="help-block">{{ errors.first('nombre_entidad') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Código IBAN:</label>
                        <input v-model="profesor.datos_bancarios.codigo_iban" name="codigo_iban" v-validate="'min:4|max:4'" type="text" class="form-control" placeholder="Código IBAN" maxlength="4">
                        <span class="help-block">{{ errors.first('codigo_iban') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Código_entidad:</label>
                        <input v-model="profesor.datos_bancarios.codigo_entidad" name="codigo_entidad" v-validate="'min:4|max:4'" type="text" class="form-control" placeholder="Código entidad" maxlength="4">
                        <span class="help-block">{{ errors.first('codigo_entidad') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Código oficina:</label>
                        <input v-model="profesor.datos_bancarios.codigo_oficina" name="codigo_oficina" v-validate="'min:4|max:4'" type="text" class="form-control" placeholder="Código oficina" maxlength="4">
                        <span class="help-block">{{ errors.first('codigo_oficina') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Dígito de control:</label>
                        <input v-model="profesor.datos_bancarios.digito_control" name="digito_control" v-validate="'min:2|max:2'" type="text" class="form-control" placeholder="Dígito de control" maxlength="2">
                        <span class="help-block">{{ errors.first('digito_control') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Número de cuenta:</label>
                        <input v-model="profesor.datos_bancarios.numero_de_cuenta" name="numero_de_cuenta" v-validate="'min:10|max:10'" type="text" class="form-control" placeholder="Número de cuenta" maxlength="10">
                        <span class="help-block">{{ errors.first('numero_de_cuenta') }}</span>
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
    'profesor'
  ],
    
  data () {
    return {
      tipos_de_permisos: [
        {tipo: 'AM'},
        {tipo: 'A1'},
        {tipo: 'A2'},
        {tipo: 'A'},
        {tipo: 'B'},
        {tipo: 'B+E'},
        {tipo: 'C1'},
        {tipo: 'C1+E'},
        {tipo: 'C'},
        {tipo: 'C+E'},
        {tipo: 'D1'},
        {tipo: 'D1+E'},
        {tipo: 'D'},
        {tipo: 'D+E'}
      ],
      newPermiso: {},
      editMode: false,
      indicePermisoEditando: '-1'
    }
  },


  created () {
    // Reseteamos el newPermiso
    this.resetNewPermiso()
  },


  methods: {

    onClosed: function () {
      this.resetNewPermiso()

      this.$emit('onClosed');
    },


    onCanceled: function () {
      this.resetNewPermiso()

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
            this.resetNewPermiso()

            // Emito el evento que se ha pulsado el boton aceptar.
            this.$emit('onAccepted')
        })
        .catch(err => {
          console.log(err)
        })
    },


    createPermiso(permiso) {
      this.profesor.permisos_conduccion.push(permiso)
      this.resetNewPermiso()
    },


    deletePermiso(index){
      this.profesor.permisos_conduccion.splice(index,1)
    },


    resetNewPermiso(){
      // Ponemos el modelo con los valores por defecto
      //this.newPermiso = ''
      this.newPermiso = {
        tipo: '',
        fecha_antiguedad: '',
        fecha_caducidad:''
      }
    },


    populatePermisoToEdit(index){
      // Marcamos que estamos en formato edicion
      this.editMode = true;

      // Almacenamos el indice del elemento que se va a editar
      this.indicePermisoEditando = index

      // Asigmanos los datos a editar
      this.newPermiso =  this.profesor.permisos_conduccion[index]
    },


    acceptEditPermiso(){
      // Asignamo el permiso que hemos editador al array de permisos
      this.profesor.permisos_conduccion[this.indicePermisoEditando] = this.newPermiso

      this.cancelEditPermiso()
    },


    cancelEditPermiso(){
      // Marcamos que ya no estamos en formato edicion
      this.editMode = false
      
      // Reseteamos el indice del elemento que se va a editar
      this.indicePermisoEditando = '-1'

      // Limpiamos las cajas de texto
      this.resetNewPermiso()
    }

  }
  
}
</script>


<style>

</style>
