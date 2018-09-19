
const loadAutoescuela = ( {commit}, currentUser ) => {

    this.$http.get('/autoescuelas/?usuarioId=' + this.currentUser.id)
        .then(request => {
            //this.autoescuela = request.data
            if (request.data.autoescuelas[0]) {
                commit('SET_AUTOESCUELA', request.data.autoescuelas[0])
            }
            //console.log(this.autoescuela)
          })
        //.catch(() => this.loginFailed())
        .catch(err => {
          //this.loginFailed(err)
          })
}

/*
const logout = ( context ) => {
    context.commit('LOGOUT')
}
*/

export default {
    loadAutoescuela
}