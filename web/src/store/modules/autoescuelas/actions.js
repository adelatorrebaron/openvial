
import autoescuelasApi from '@/services/api/autoescuelas.js'

const loadAutoescuela = ( {commit}, currentUser ) => {

    console.log(`Id del usuario a leer autoescuela por usuario: ${currentUser.id}`)
    return autoescuelasApi.getAutoescuelaByUserId(currentUser.id)
        .then(autoescuela => {
            console.log(autoescuela)
            // Comprobar lo que devuelve
            if (autoescuela === null || typeof autoescuela == "undefined")
                commit('SET_AUTOESCUELA', null)
            else
                commit('SET_AUTOESCUELA', autoescuela)

                console.log(autoescuela)
        })
        .catch(err => {
            //this.loginFailed(err)
        })
}

const saveAutoescuela = ({commit}, autoescuela) => {
    
    // Llamamos al API para enviar los datos y salvarlos
    return autoescuelasApi.saveAutoescuela(autoescuela)
        .then(response => {
            //commit('SET_AUTOESCUELA', autoescuela)
            console.log(response.data.registro_creado)
            commit('SET_AUTOESCUELA', response.data.registro_creado)
        })
        .catch(err => {
            //this.loginFailed(err)
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