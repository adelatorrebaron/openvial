<template>
  <div class="vehiculos">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>{{ msg }}</h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</router-link>
        </li>
        <li class="active">Vehiculos</li>
      </ol>
    </section>
  </div>
</template>

<script>
//import { mapGetters } from 'vuex'

export default {
  name: 'vehiculos',
  data () {
    return {
      msg: 'Vehiculos'
    }
  },
  computed: {
//    ...mapGetters({ currentUser: 'currentUser' })
  },
  created () {
//    this.checkCurrentLogin()
  },
  updated () {
//    this.checkCurrentLogin()
  },
  methods: {
/*
    checkCurrentLogin () {
      if (!this.currentUser && this.$route.path !== '/login') {
        this.$router.push('/login')
      }
    }
    */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>