
import autoescuelasApi from '@/services/api/autoescuelas.js'

const loadAutoescuela = ( {commit}, currentUserId ) => {

    //console.log(`Id del usuario a leer autoescuela por usuario: ${currentUserId}`)
    return autoescuelasApi.getAutoescuelaByUserId(currentUserId)
        .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            if (data.code === 200){
                // Asigno la Autoescuela al State
                commit('SET_AUTOESCUELA', data.result.autoescuela)
            }else{
                // Registro no encontrado
                // Asigno null al State de la Autoescuela
                commit('SET_AUTOESCUELA', null)
            }
        })
        .catch(err => {
            console.log(err)
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
    // Pone a null la Autoescuela. Se emplea al deslogearse
    context.commit('UNSET_AUTOESCUELA')
}



export default {
    loadAutoescuela,
    unloadAutoescuela,
    saveAutoescuela
}