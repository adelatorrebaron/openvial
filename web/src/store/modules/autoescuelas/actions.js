
import autoescuelasApi from '@/services/api/autoescuelas.js'


const loadAutoescuela = ( {commit}, currentUserId ) => {
    // Llamamos al API para obtener la autoescuela por el Id del usuario
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
        })
}

const saveAutoescuela = ({commit}, autoescuela) => {
    // Llamamos al API para enviar los datos y salvarlos
    return autoescuelasApi.saveAutoescuela(autoescuela)
        .then(response => {
            // Asignamos los datos de la Autoescuela al Store
            commit('SET_AUTOESCUELA', response.result.autoescuela)
        })
        .catch(err => {
            console.log(err)
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