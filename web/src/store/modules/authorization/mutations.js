//import User from '@/models/User'


const LOGIN = (state, usuario) => {
//      state.user = User.from(localStorage.token)
      state.user = usuario
}

const LOGOUT = (state) => {
      state.user = null
}

const SET_USUARIO = (state, usuario) => {
      state.user = usuario
}

export default {
    LOGIN,
    LOGOUT,
    SET_USUARIO
}