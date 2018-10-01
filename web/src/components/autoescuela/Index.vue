<template>
  <div v-if="autoescuela" class="autoescuela">

    <!-- Vista de la ventana de Autoescuela -->
    <autoescuela-view
      v-bind:autoescuela="autoescuela"
      v-bind:ventanaTitulo="ventanaTitulo"
      v-on:onClicked="showAutoescuelaModalForm()"
    >
    </autoescuela-view>

    <!-- Formulario para editar la Autoescuela -->
    <autoescuela-modal-form
      v-bind:show="autoescuelaFormShow"
      v-bind:title="autoescuelaFormTitle"
      v-bind:action="autoescuelaFormAction"
      v-bind:autoescuela="autoescuela"
      v-on:onClosed="onClosed('Cerrado el formulario de edición de la Autoescuela')" 
      v-on:onCanceled="onCanceled('Cancelado el formulario de edición de la Autoescuela')" 
      v-on:onAccepted="onAccepted('Aceptado el formulario de edición de la Autoescuela')">
    </autoescuela-modal-form>

  </div>
</template>

<script>
import autoescuelaView          from '@/components/autoescuela/autoescuela-view'
import autoescuelaModalForm     from '@/components/autoescuela/autoescuela-modal-form'

import { mapGetters }           from 'vuex'

export default {
  name: 'autoescuela',
  components: {
    'autoescuela-view':           autoescuelaView,
    'autoescuela-modal-form':     autoescuelaModalForm
  },
  data () {
    return {
      ventanaTitulo: 'Autoescuela',
      autoescuelaFormShow: false,
      autoescuelaFormTitle: 'Edición de la Autoescuela',
      autoescuelaFormAction: 'edit',
      autoescuela: {
        _id: '',
        usuario_id: '',
        denominacion: '',
        numero_provincial: '',
        seccion: '',
        digito_control: '',
        numero_secuencial: '',
        direccion: {
          via: {
            tipo: '',
            nombre: '',
            numero: '',
            bloque: '',
            portal: '',
            escalera: '',
            planta: '',
            puerta: '',
            kilometro: ''
          },
          codigo_postal: '',
          poblacion: '',
          provincia: '',
          pais: ''
        },
        contacto: {
          telefono_fijo: '',
          telefono_movil: '',
          whatsapp: '',
          email: '',
          website: '',
          facebook: '',
          twitter: ''
        },
        estado: false
      },

    }
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' }),
  },

  created () {
    this.loadAutoescuelaData();
    
  },

  updated () {
    this.loadAutoescuelaData();
  },

  methods: {
    loadAutoescuelaData() {
      this.autoescuela = this.$store.state.autoescuelas.autoescuela
    },
    showAutoescuelaModalForm(){
      // Muestro el formulario
      this.autoescuelaFormShow = true
    },
    onClosed(mensaje) {
      // Cierro el formulario
      this.autoescuelaFormShow = false
    },
    onCanceled(mensaje){
      // Cierro el formulario
      this.autoescuelaFormShow = false
    },
    onAccepted(mensaje){
      // Cierro el formulario
      this.autoescuelaFormShow = false
    }    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
}
</style>