<template>
    <div>
        <div class="col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4">
          <div class="row margin-top-10">
            <div class="col-md-12 text-center">
              <h3>Espera, ¿aún no has creado la Autoescuela?</h3>
            </div>
          </div>

          <div class="row margin-top-10">
            <div class="col-md-12 text-center">
              <img src="@/assets/inicializar_autoescuela.png">
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <p>Una vez creada la Autoescuela podrás introducir todos los elementos que la componen, como profesores, alumnos, clases, pagos, vehículos, en definitiva, gestionar completamente tu Centro de Formación Vial</p>
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
      this.$emit('onClicked');
    }
  }
}
</script>


<style>

.btn-circle.btn-xl {
    width: 50px;
    height: 50px;
    padding: 10px 16px;
    border-radius: 25px;
    font-size: 24px;
    line-height: 1.33;
}

.btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 1.42857;
}
</style>


