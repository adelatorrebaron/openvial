<template> 
    <div v-if="show">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" @click="onClosed()">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 class="modal-title">Modal title</h4>
                            </div>
                            <div class="modal-body">
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-default" @click="onCanceled()">Cancelar</button>
                                <button class="btn btn-primary" @click="onAccepted()">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>


<script>
export default {
    props: [
        'show'
    ],
    
    methods: {
        onClosed: function () {
            this.$emit('close');
        },
        onCanceled() {
          // Some save logic goes here...

          this.onClosed()
        },
        onAccepted: function () {
            // Some save logic goes here...

            this.onClosed();
        }
    }
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
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
    -webkit-transition: opacity 500ms ease-in;
  -moz-transition: opacity 500ms ease-in;
  transition: opacity 500ms ease-in;
}

.modal-body
{
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  background-color: #FFFFFF;
}

.modal-content
{
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  background-color: transparent;
}

.modal-footer
{
  background-color: #d9edf7;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  -webkit-border-bottom-left-radius: 6px;
  -webkit-border-bottom-right-radius: 6px;
  -moz-border-radius-bottomleft: 6px;
  -moz-border-radius-bottomright: 6px;
}

.modal-header
{
  background-color: #337ab7;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  -webkit-border-top-left-radius: 6px;
  -webkit-border-top-right-radius: 6px;
  -moz-border-radius-topleft: 6px;
  -moz-border-radius-topright: 6px;
}

</style>