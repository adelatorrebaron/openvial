<template>
    <div>
        <div class="col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4">

          <div class="row margin-top-10">
            <div class="col-md-12 text-center">
              <h3>Aún no hemos terminado,<br/>finalizaremos configurando tu perfil...</h3>
            </div>
          </div>

          <div class="row margin-top-10">
            <div class="col-md-12 text-center">
              <img src="@/assets/inicializar_perfil.png">
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <p>Mediante la configuración de tu perfil podrás asignar a tu usuario la foto que desees. Además también podrás realizar otro tipo de configuraciones.</p>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <div class="btn-add-container">
                <button type="button" class="btn btn-success btn-circle btn-xl" @click="onClicked()">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    onClicked: function() {
      this.$emit('click');
    }
  }    
}
</script>

<style>

</style>


