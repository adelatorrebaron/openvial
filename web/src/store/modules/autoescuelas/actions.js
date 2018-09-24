
import autoescuelasApi from '@/services/api/autoescuelas.js'

const loadAutoescuela = ( {commit}, currentUser ) => {

    return autoescuelasApi.getAutoescuelaByUserId(currentUser)
        .then(autoescuela => {
            commit('SET_AUTOESCUELA', autoescuela)
        })
    //commit('SET_AUTOESCUELA', prueba)
/*
     Vue.http.get('/autoescuelas/?usuarioId=' + this.currentUser.id)
        .then(request => {
            
            console.log(request.data.autoescuelas[0])
            if (request.data.autoescuelas[0]) {
                commit('SET_AUTOESCUELA', request.data.autoescuelas[0])
            }

          })
        .catch(err => {
          //this.loginFailed(err)
          })
 */
}

const saveAutoescuela = ({commit}, autoescuela) => {
    return autoescuelasApi.saveAutoescuela(autoescuela)
        .then(response => {
            console.log(response.data)
        })
}

const unloadAutoescuela = ( context ) => {
    context.commit('UNSET_AUTOESCUELA')
}



export default {
    loadAutoescuela,
    unloadAutoescuela,
    saveAutoescuela
}