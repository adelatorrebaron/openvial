<template>
  <div class="dashboard">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1 v-if="existAutoescuela">{{ msg }}</h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</router-link>
        </li>
      </ol>
    </section>
    {{ currentAutoescuela }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Dashboard'
    }
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser'}),
    ...mapGetters( { currentAutoescuela: 'currentAutoescuela'} ),
    ...mapGetters( { existAutoescuela: 'existAutoescuela'} )
  },
  created () {
    //this.$store.dispatch('loadAutoescuela', this.currentUser)
    this.cargarDatosAutoescuela()

    //this.checkAutoescuelaExiste()
  },
  updated () {
    //this.cargarDatosAutoescuela()
    //this.$store.dispatch('loadAutoescuela', this.currentUser)
    //this.checkAutoescuelaExiste()
  },
  methods: {
    cargarDatosAutoescuela() {
      if (!this.existAutoescuela)
        this.$store.dispatch('loadAutoescuela', this.currentUser)
    }
    /*
    checkAutoescuelaExiste () {
      //console.log(this.currentUser)
      this.$http.get('/autoescuelas/?usuarioId=' + this.currentUser.id)
        .then(request => {
            //this.autoescuela = request.data
            if (request.data.autoescuelas[0]) {
              this.autoescuela = request.data.autoescuelas[0]
            } else {
              this.$router.push('/bienvenida')
            }
            //console.log(this.autoescuela)
          })
        //.catch(() => this.loginFailed())
        .catch(err => {
          //this.loginFailed(err)
          })
          
    }*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>