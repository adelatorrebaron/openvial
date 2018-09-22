import User from '@/models/User'


const SET_AUTOESCUELA = (state, autoescuela) => {
      state.autoescuela = autoescuela
}

const UNSET_AUTOESCUELA = (state) => {
      state.autoescuela = null
}

/*
const LOGOUT = (state) => {
      state.user = null
}
*/

export default {
      SET_AUTOESCUELA,
      UNSET_AUTOESCUELA

}