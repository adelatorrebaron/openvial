

const login = ({ commit }) => {
    commit('LOGIN')
}


const logout = ({ commit }) => {
    commit('LOGOUT')
}
  

export default {
    login,
    logout
}