<template>
  <div class="principal">
    <h1>{{ msg }}</h1>
    <br>
    <router-link to="/login" class="text-center">Logearme</router-link>
  </div>
</template>

<script>
export default {
  name: 'principal',
  data () {
    return {
      msg: 'Pagina principal'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>