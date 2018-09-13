<template>
<div class="register-box">
  <div class="register-logo">
    <router-link to="/"><span class="text-primary"><b>Open</b>Vial</span></router-link>
    <!-- <a href="../../index2.html"><b>Open</b>Vial</a> -->
  </div>
  <!-- /.login-logo -->
  <div class="register-box-body">
    <p class="register-box-msg">Regístrate como usuario</p>

    <form @submit.prevent="registro">
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <div class="form-group has-feedback">
        <input v-model="username" type="username" class="form-control" placeholder="Username" required autofocus>
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input v-model="email" type="email" class="form-control" placeholder="Email" required>
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input v-model="password" type="password" class="form-control" placeholder="Password" required>
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <!--
      <div class="form-group has-feedback">
        <input v-model="reintentar_password" type="password" class="form-control" placeholder="Reintentar password" required>
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      -->
      <div class="row">
        <div class="col-xs-8">
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat">Registrar</button>
        </div>
        <!-- /.col -->
      </div>
    </form>

    <router-link to="/usuario/login" class="text-center">Iniciar sesión</router-link>
    <br>
    <router-link to="/" class="text-center">Ir a la página principal</router-link>

  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      reintentar_password: '',
      error: false
    }
  },
  methods: {
    registro () {
      this.$http.post('/usuarios/registro', {username: this.username, email: this.email, password: this.password})
        .then(request => this.registroSuccessful(request))
        .catch(err => this.registroFailed(err))
    },
    registroSuccessful (req) {
      this.error = false
      this.$router.replace(this.$route.query.redirect || '/usuario/login')
    },
    registroFailed (err) {
      //console.log(error);
      //this.error = 'El registro fallo!, vuelva a intentarlo de nuevo'
      this.error = err.response.data.message;
    }
  }
}
</script>

<style lang="css" scoped>
.register-box-body {
  background-color: #ecf0f5;
  animation: fadein 1.0s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>