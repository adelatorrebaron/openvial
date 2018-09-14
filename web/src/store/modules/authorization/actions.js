

const login = ( context ) => {
    context.commit('LOGIN')
}


const logout = ( context ) => {
    context.commit('LOGOUT')
}
  

export default {
    login,
    logout
}