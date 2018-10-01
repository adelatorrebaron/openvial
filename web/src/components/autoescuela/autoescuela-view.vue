<template>
    <div>
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>{{ventanaTitulo}}</h1>
        <ol class="breadcrumb">
          <li>
            <router-link to="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</router-link>
          </li>
          <li class="active">{{ventanaTitulo}}</li>
        </ol>
      </section>
      
      <!-- BOTTON REDONDO PARA EDITAR QUE MUESTRA EL FORMULARIO MODAL DE LA AUTOESCUELA -->
      <section class="content-header" style="text-align:right">
        <button type="button" class="btn btn-primary btn-circle btn-xl" v-on:click="onClicked()">
          <i class="fa fa-pencil"></i>
        </button>
      </section>

      <section class="content">

        <!-- INFORMACION GENERAL -->
        <div class="box box-default">
          <div class="box-header with-border">
            <h3 class="box-title">Información general</h3>
          </div>
          <div class="box-body">
            <!--
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label>Id:</label>
                  <input v-model="autoescuela._id" type="text" class="form-control" placeholder="" disabled>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Usuario Id:</label>
                  <input v-model="autoescuela.usuario_id" type="text" class="form-control" placeholder="" disabled>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Fecha creación:</label>
                  <input v-model="autoescuela.fecha_creacion" type="text" class="form-control" placeholder="" disabled>
                </div>
              </div>
            </div>
            -->
            <div class="row">
              <div class="col-md-9">
                <div class="form-group">
                  <label>Denominación:</label>
                  <input v-model="autoescuela.denominacion" type="text" class="form-control" placeholder="Denominación" readonly>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>Fecha creación:</label>
                  <input v-model="autoescuela.fecha_creacion" type="text" class="form-control" placeholder="" readonly>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <label>Nº Provincial:</label>
                  <input v-model="autoescuela.numero_provincial" type="text" class="form-control" placeholder="Nº Provincial" readonly>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>Sección:</label>
                  <input v-model="autoescuela.seccion" type="text" class="form-control" placeholder="Sección" readonly>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>Dígito de control:</label>
                  <input v-model="autoescuela.digito_control" type="text" class="form-control" placeholder="Dígito de control" readonly>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>Nº Secuencial:</label>
                  <input v-model="autoescuela.numero_secuencial" type="text" class="form-control" placeholder="Nº Secuencial" readonly>
                </div>
              </div>                                    
            </div>
          </div>
        </div>

        <!-- DIRECCION -->
        <div class="box box-default">
          <div class="box-header with-border">
            <h3 class="box-title">Dirección</h3>
          </div>
          <div class="box-body">
            <div class="row">
              <div class="col-md-2">
                <div class="form-group">
                  <label>Tipo de vía:</label>
                  <input v-model="autoescuela.direccion.via.tipo" type="text" class="form-control" placeholder="Tipo de vía" readonly>
                </div>
              </div>
              <div class="col-md-8">
                <div class="form-group">
                  <label>Nombre:</label>
                  <input v-model="autoescuela.direccion.via.nombre" type="text" class="form-control" placeholder="Nombre" readonly>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label>Número:</label>
                  <input v-model="autoescuela.direccion.via.numero" type="text" class="form-control" placeholder="Numero" readonly>
                </div>
              </div>
            </div>
            <div class="row">        
              <div class="col-md-2">
                <div class="form-group">
                  <label>Bloque:</label>
                  <input v-model="autoescuela.direccion.via.bloque" type="text" class="form-control" placeholder="Bloque" readonly>
                </div>
              </div>        
              <div class="col-md-2">
                <div class="form-group">
                  <label>Portal:</label>
                  <input v-model="autoescuela.direccion.via.portal" type="text" class="form-control" placeholder="Portal" readonly>
                </div>
              </div> 
              <div class="col-md-2">
                <div class="form-group">
                  <label>Escalera:</label>
                  <input v-model="autoescuela.direccion.via.escalera" type="text" class="form-control" placeholder="Escalera" readonly>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label>Planta:</label>
                  <input v-model="autoescuela.direccion.via.planta" type="text" class="form-control" placeholder="Planta" readonly>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label>Puerta:</label>
                  <input v-model="autoescuela.direccion.via.puerta" type="text" class="form-control" placeholder="Puerta" readonly>
                </div>
              </div>            
              <div class="col-md-2">
                <div class="form-group">
                  <label>Kilómetro:</label>
                  <input v-model="autoescuela.direccion.via.kilometro" type="text" class="form-control" placeholder="Kilómetro" readonly>
                </div>
              </div>
            </div>

            <div class="row">        
              <div class="col-md-3">
                <div class="form-group">
                  <label>Código postal:</label>
                  <input v-model="autoescuela.direccion.codigo_postal" type="text" class="form-control" placeholder="Código postal" readonly>
                </div>
              </div>        
              <div class="col-md-3">
                <div class="form-group">
                  <label>Población:</label>
                  <input v-model="autoescuela.direccion.poblacion" type="text" class="form-control" placeholder="Población" readonly>
                </div>
              </div> 
              <div class="col-md-3">
                <div class="form-group">
                  <label>Provincia:</label>
                  <input v-model="autoescuela.direccion.provincia" type="text" class="form-control" placeholder="Provincia" readonly>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>País:</label>
                  <input v-model="autoescuela.direccion.pais" type="text" class="form-control" placeholder="Pais" readonly>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CONTACTO -->
        <div class="box box-default">
          <div class="box-header with-border">
            <h3 class="box-title">Contacto</h3>
          </div>
          <div class="box-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Correo electrónico:</label>
                  <input v-model="autoescuela.contacto.email" type="text" class="form-control" placeholder="Correo electrónico" readonly>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label>Teléfono fijo:</label>
                  <input v-model="autoescuela.contacto.telefono_fijo" type="text" class="form-control" placeholder="Teléfono fijo" readonly>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label>Teléfono móvil:</label>
                  <input v-model="autoescuela.contacto.telefono_movil" type="text" class="form-control" placeholder="Teléfono móvil" readonly>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label>Whatsapp:</label>
                  <input v-model="autoescuela.contacto.whatsapp" type="text" class="form-control" placeholder="Whatsapp" readonly>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label>Sitio web:</label>
                  <input v-model="autoescuela.contacto.website" type="text" class="form-control" placeholder="Sitio web" readonly>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Facebook:</label>
                  <input v-model="autoescuela.contacto.facebook" type="text" class="form-control" placeholder="Facebook" readonly>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Twitter:</label>
                  <input v-model="autoescuela.contacto.twitter" type="text" class="form-control" placeholder="Twitter" readonly>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

export default {
  props: [
    'autoescuela',
    'ventanaTitulo'
  ],

  methods: {
    onClicked: function() {
      this.$emit('onClicked');
    },
  }
}
</script>


<style>

.btn-circle.btn-xl {
    width: 50px;
    height: 50px;
    padding: 10px 16px;
    border-radius: 25px;
    font-size: 24px;
    line-height: 1.33;
}

.btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 1.42857;
    margin-right: 15px;
}
</style>


