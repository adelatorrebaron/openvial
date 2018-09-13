<template>
  <div class="informe_vehiculos">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'informe_vehiculos',
  data () {
    return {
      msg: 'Informes vehiculos'
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