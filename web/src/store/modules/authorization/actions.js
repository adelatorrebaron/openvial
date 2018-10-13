import usuariosApi from '@/services/api/usuarios.js'

const login = ( context, usuario ) => {
    context.commit('LOGIN', usuario)
}


const logout = ( context ) => {
    context.commit('LOGOUT')
}


const updateUsuario = ({commit}, usuario) => {
    // Llamamos al API para enviar los datos y actualizarlos
    return usuariosApi.updateUsuarioPerfil(usuario)
        .then(response => {
            // Asignamos los datos de la Autoescuela al Store
            commit('SET_USUARIO', usuario)
        })
        .catch(err => {
            console.log(err)
        })
}


const updateImagenPerfilUsuario = ({commit}, pathImagenPerfil) => {
    // Asignamos los datos de la Autoescuela al Store
    commit('SET_USUARIO_IMAGEN_PERFIL', pathImagenPerfil)
}


export default {
    login,
    logout,
    updateUsuario,
    updateImagenPerfilUsuario
}