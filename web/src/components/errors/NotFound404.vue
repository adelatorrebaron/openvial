<template>
  <div class="notFound404">
    <!-- Content Header (Page header) -->
    <section class="content-header">


      <div class="error-page">
        <h2 class="headline text-yellow"> 404</h2>

        <div class="error-content">
          <h3><i class="fa fa-warning text-yellow"></i> Oops! Página no encontrada.</h3>

          <p v-if="currentUser">
            No encontramos la página que estabas buscando. <br/>
            De cualquier forma, deberías de <router-link to="/dashboard"><span>volver al Dashboard</span></router-link>  
            o intentarlo de otra forma.
          </p>
          <p v-else>
            No encontramos la página que estabas buscando. <br/>
            De cualquier forma, deberías de <router-link to="/"><span>volver a la página Principal</span></router-link>  
            o intentarlo de otra forma.
          </p>
        </div>
        <!-- /.error-content -->
      </div>
      <!-- /.error-page -->
    </section>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'notFound404',
  data () {
    return {
      msg: 'Not Found: Error 404'
    }
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  created () {

  },
  updated () {

  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>