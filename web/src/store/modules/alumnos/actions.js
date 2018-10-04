
import alumnosApi from '@/services/api/alumnos.js'

const loadAlumnos = ( {commit} ) => {
    // Llamamos al API para obtener los alumnos
    return alumnosApi.getAlumnoAll()
        .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            if (data.code === 200){
                // Asigno los alumnos al State
                commit('SET_ALUMNOS', data.result.alumnos)
            }else{
                // Registro no encontrado
                // Asigno null al State de los alumnos
                commit('SET_ALUMNOS', null)
            }
        })
        .catch(err => {
            console.log(err)
        })
}


const loadAlumnoByAlumnoId = ( {commit}, alumnoId ) => {
    // Llamamos al API para obtener el alumno por el Id del alumno
    return alumnosApi.getAlumnoByAlumnoId(alumnoId)
        .then(data => {
            // Compruebo el codigo de los datos de respuesta
            // Si es 200 es que ha encontrado el registro
            if (data.code === 200){
                // Asigno el alumno al State
                commit('SET_ALUMNO', data.result.alumno)
            }else{
                // Registro no encontrado
                // Asigno null al State del alumno
                commit('SET_ALUMNO', null)
            }
        })
        .catch(err => {
            console.log(err)
        })
}


const createAlumno = ({commit}, alumno) => {
    // Llamamos al API para enviar los datos y salvarlos
    return alumnosApi.createAlumno(alumno)
        .then(response => {
            // Si se ha creado no hacemos nada, ya que no devuelve datos
        })
        .catch(err => {
            console.log(err)
        })
}


const updateAlumno = ({commit}, alumno) => {
    // Llamamos al API para enviar los datos y actualizarlos
    return alumnosApi.updateAlumno(alumno)
        .then(response => {
            // Si se ha actualizado no hacemos nada, ya que no devuelve datos
        })
        .catch(err => {
            console.log(err)
        })
}


const deleteAlumno = ({commit}, alumnoId) => {
    // Llamamos al API para enviar los datos y actualizarlos
    return alumnosApi.deleteAlumno(alumnoId)
        .then(response => {
            // Si se ha eliminado no hacemos nada, ya que no devuelve datos
        })
        .catch(err => {
            console.log(err)
        })
}


const unloadAlumnos = ( context ) => {
    // Pone a null los alumnos.
    context.commit('UNSET_ALUMNOS')
}


const unloadAlumno = ( context ) => {
    // Pone a null el alumno.
    context.commit('UNSET_ALUMNO')
}



export default {
    loadAlumnos,
    loadAlumnoByAlumnoId,
    createAlumno,
    updateAlumno,
    deleteAlumno,
    unloadAlumnos,
    unloadAlumno
}