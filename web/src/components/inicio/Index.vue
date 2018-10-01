<template>
  <div class="inicio">
    <div class="container text-center">
      <div class="login-logo">
        <router-link to="/"><span class="text-primary"><b>Open</b>Vial</span></router-link>
      </div>
      <p class="login-box-msg"><b>{{ msg }}</b></p>
      <img src="@/assets/logo.png" alt="Logo Openvial"/>
      <br>
      <br>
      <router-link to="/usuario/login" class="text-center">Iniciar sesión</router-link>
      <br>
      <router-link to="/usuario/registro" class="text-center">Registrarme</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'inicio',
  data () {
    return {
      msg: 'La mejor herramienta para gestión de Autoescuelas'
    }
  },

  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  created () {
    this.checkCurrentLogin()
  },
  updated () {
    this.checkCurrentLogin()
  },


  methods: {
    checkCurrentLogin () {
      if (this.currentUser) {
        this.$router.replace('/dashboard')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inicio {
  animation: fadein 1.0s;
}
.login-logo {
  margin-top: 50px;
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>





