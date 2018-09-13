<template>
<div class="login-box">
  <div class="login-logo">
    <router-link to="/"><span class="text-primary"><b>Open</b>Vial</span></router-link>
    <!-- <a href="../../index2.html"><b>Open</b>Vial</a> -->
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Logueate para iniciar sesion</p>

    <form @submit.prevent="login">
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <div class="form-group has-feedback">
        <input v-model="email" type="email" class="form-control" placeholder="Email" required autofocus>
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input v-model="password" type="password" class="form-control" placeholder="Password" required>
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat">Loguearme</button>
        </div>
        <!-- /.col -->
      </div>
    </form>

    <!-- <a href="#">Olvidé mi contraseña</a><br> -->
    <!--<router-link to="/usuario/recuperar-password" class="text-center">Olvidé mi contraseña</router-link>
    <br> -->
    <!-- <a href="register.html" class="text-center">Registrarme como un nuevo usuario</a> -->
    <router-link to="/usuario/registro" class="text-center">Quiero registrarme</router-link>
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
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: false
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
        this.$router.replace(this.$route.query.redirect || '/dashboard')
      }
    },
    login () {
      this.$http.post('/usuarios/login', { email: this.email, password: this.password })
        .then(request => this.loginSuccessful(request))
        //.catch(() => this.loginFailed())
        .catch(err => this.loginFailed(err))
    },
    loginSuccessful (req) {
      //console.log(req.data);
      if (!req.data.token) {
        this.loginFailed()
        return
      }
      this.error = false
      localStorage.token = req.data.token
      this.$store.dispatch('login')
      
      // Muestro el panel lateral al hacer login/registro
      this.toggleBodyClass('removeClass', 'sidebar-collapse');
      //this.toggleBodyClass('addClass', 'sidebar-mini');

      this.$router.replace(this.$route.query.redirect || '/dashboard')
    },
    loginFailed (err) {
      //console.log(err.data);
      this.error = err.response.data.message;
      this.$store.dispatch('logout')
      delete localStorage.token
    },
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
}
</script>

<style lang="css" scoped>
.login-box-body {
  background-color: #ecf0f5;
  animation: fadein 1.0s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>