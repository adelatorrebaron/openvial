import axios from 'axios'

let API_URL             = 'http://localhost:3003/api/v1';

if (process.env.URL_API_ALUMNOS) {
    API_URL = process.env.URL_API_ALUMNOS;
}

let config = {
    headers: {
       //'Content-Type': 'application/x-www-form-urlencoded',
       'content-type': 'application/pdf',
       'Authorization': 'Bearer ' + localStorage.token
    }
};


export default {
    
    getAlumnoByAlumnoId(alumnoId) {
        return axios.get(API_URL + '/alumnos/' + alumnoId)
            .then(request => {
                // Devuelvo los datos obtenidos del API externo
                return request.data
            })
        .catch(err => {
            return err
        })
    },

    getAlumnoAll() {
        return axios.get(API_URL + '/alumnos/')
            .then(request => {
                // Devuelvo los datos obtenidos del API externo
                return request.data
            })
        .catch(err => {
            return err
        })
    },

    createAlumno(alumno) {
        return axios.post(
                API_URL + '/alumnos/',
                alumno,
                config
            )
            .then(response => {
                // Devuelvo los datos obtenidos del API externo
                return response.data
            })
            .catch(err => {
                return err
            })
    },

    updateAlumno(alumno) {
        return axios.put(
                API_URL + '/alumnos/' + alumno._id,
                alumno,
                config
            )
            .then(response => {
                // Devuelvo los datos obtenidos del API externo
                return response.data
            })
            .catch(err => {
                return err
            })
    },

    deleteAlumno(alumnoId) {
        return axios.delete(
                API_URL + '/alumnos/' + alumnoId,
                config
            )
            .then(response => {
                // Devuelvo los datos obtenidos del API externo
                return response.data
            })
            .catch(err => {
                return err
            })
    }

}