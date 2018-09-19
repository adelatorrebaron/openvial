<template>
  <div class="bienvenida">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>{{ msg }}</h1>
      A continuación procederemos a configurar su aplicación
    </section>
  </div>
</template>

<script>
//import { mapGetters } from 'vuex'

export default {
  name: 'Bienvenida',
  data () {
    return {
      msg: 'Bienvenido a Openvial'
    }
  },
  computed: {
    //...mapGetters({ currentUser: 'currentUser' })
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
<style>
</style>