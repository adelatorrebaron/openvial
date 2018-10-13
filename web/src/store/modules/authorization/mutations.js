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

const SET_USUARIO_IMAGEN_PERFIL = (state, pathImagenPerfil) => {
      state.user.perfil.avatar = pathImagenPerfil
}

export default {
    LOGIN,
    LOGOUT,
    SET_USUARIO,
    SET_USUARIO_IMAGEN_PERFIL
}