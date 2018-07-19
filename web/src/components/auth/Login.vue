<template>
<div class="login-box">
  <div class="login-logo">
    <router-link to="/"><b>Open</b>Vial</router-link>
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
          <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
        </div>
        <!-- /.col -->
      </div>
    </form>

    <!-- <a href="#">Olvidé mi contraseña</a><br> -->
    <router-link to="/recuperar-password" class="text-center">Olvidé mi contraseña</router-link>
    <br>
    <!-- <a href="register.html" class="text-center">Registrarme como un nuevo usuario</a> -->
    <router-link to="/registro" class="text-center">Registrarme como un nuevo usuario</router-link>
  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->

</template>
<!--
<template>
  <div class="login-overlay">
    <div class="login-wrapper border border-light">
      <form class="form-signin" @submit.prevent="login">
        <h2 class="form-signin-heading">Please sign in</h2>
        <div class="alert alert-danger" v-if="error">{{ error }}</div>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </div>
  </div>
</template>
-->

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
        .catch(() => this.loginFailed())
    },
    loginSuccessful (req) {
      console.log(req.data);
      if (!req.data.token) {
        this.loginFailed()
        return
      }
      this.error = false
      localStorage.token = req.data.token
      this.$store.dispatch('login')
      this.$router.replace(this.$route.query.redirect || '/dashboard')
    },
    loginFailed () {
      this.error = 'Login failed!'
      this.$store.dispatch('logout')
      delete localStorage.token
    }
  }
}
</script>

<style lang="css" scoped>
.login-box-body {
  background-color: #ecf0f5;
}


</style>