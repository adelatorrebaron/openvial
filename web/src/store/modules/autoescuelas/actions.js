

const getAutoescuela = ( context, currentUser ) => {
    this.$http.get('/autoescuelas/?usuarioId=' + currentUser.id)
    .then(request => {
        context.commit('GETAUTOESCUELA', request.data.autoescuelas[0])
        //this.autoescuela = request.data.autoescuelas[0]
        console.log(request.data.autoescuelas[0])
    })
    .catch(err => {
      console.log(err)
    })

}

/*
const logout = ( context ) => {
    context.commit('LOGOUT')
}
*/

export default {
    getAutoescuela
}