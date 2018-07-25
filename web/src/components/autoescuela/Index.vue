<template>
  <div class="autoescuela">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Autoescuela</h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</router-link>
        </li>
        <li class="active">Autoescuela</li>
      </ol>
    </section>
    
    <section class="content">

      <!-- INFORMACION GENERAL -->
      <div class="box box-default">
        <div class="box-header with-border">
          <h3 class="box-title">Información general</h3>
        </div>
        <div class="box-body">
          <div class="row">
            <div class="col-md-8">
              <div class="form-group">
                <label>Id:</label>
                <input v-model="autoescuela.id" type="text" class="form-control" placeholder="" disabled>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Fecha creación:</label>
                <input v-model="autoescuela.fecha_creacion" type="text" class="form-control" placeholder="" disabled>
              </div>
            </div>
          </div>
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
      <div class="box box-default">
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
      <div class="box box-default">
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
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/dashboard" class="btn btn-default pull-right">
            <i class="fa fa-close"></i>
            <span> Cancelar</span>
          </router-link>
          <button type="button" class="btn btn-primary pull-right" style="margin-right: 5px;">
            <i class="fa fa-check"></i> Aceptar
          </button>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'autoescuela',
  data () {
    return {
      autoescuela: {
        id: 'id_asdf',
        denominacion: 'denominacion_asdf',
        numero_provincial: 'numero_provincial_asdf',
        seccion: 'seccion_asdf',
        digito_control: 'digito_control_asdf',
        numero_secuencial: 'numero_secuencial_asdf',
        direccion: {
          via: {
            tipo: 'tipo_asdf',
            nombre: 'nombre_asdf',
            numero: 'numero_asdf',
            bloque: 'bloque_asdf',
            portal: 'portal_asdf',
            escalera: 'escalera_asdf',
            planta: 'planta_asdf',
            puerta: 'puerta_asdf',
            kilometro: 'kilometro_asdf'
          },
          codigo_postal: 'codigo_postal_asdf',
          poblacion: 'poblacion_asdf',
          provincia: 'provincia_asdf',
          pais: 'pais'
        },
        contacto: {
          telefono_fijo: 'telefono_fijo_asdf',
          telefono_movil: 'telefono_movil_asdf',
          whatsapp: 'whatsapp_asdf',
          email: 'email_asdf',
          website: 'website_asdf',
          facebook: 'facebook_asdf',
          twitter: 'twitter_asdf'
        },
        fecha_creacion: 'fecha_creacion_asdf',
        estado: 'estado_asdf'
      }
    }
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  created () {
    this.checkCurrentLogin()
    this.cargarDatosAutoescuela()
  },
  updated () {
    this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin () {
      if (!this.currentUser && this.$route.path !== '/usuario/login') {
        this.$router.push('/usuario/login')
      }
    },
    cargarDatosAutoescuela() {
      this.$http.get('/autoescuelas/' + '5b4253ebbd9cd500135f4e0d')
        .then(request => {
          this.autoescuela = request.data
          console.log(request.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>