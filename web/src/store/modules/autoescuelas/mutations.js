
const SET_AUTOESCUELA = (state, autoescuela) => {
      
      if (typeof autoescuela == 'undefined'){
            state.autoescuela = null
      } else {
            state.autoescuela = autoescuela
      }
}

const UNSET_AUTOESCUELA = (state) => {
      state.autoescuela = null
}


export default {
      SET_AUTOESCUELA,
      UNSET_AUTOESCUELA

}