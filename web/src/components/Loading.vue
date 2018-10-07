<template> 
    <div v-if="show">
        <transition name="modal">
            <div class="modal-mask">
                <div class="texto">
                    <div>Cargando...
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>


<script>
export default {
    props: [
      'show',   // Mostrará el Loading
      ],

}
</script>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
  display: table;
  transition: opacity .3s ease;
}

.texto {
  top: 25px;
  position: absolute;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 16px;
  color: white;
  }

</style>
