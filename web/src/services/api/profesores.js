import axios from 'axios'

let API_URL = 'http://localhost:3004/api/v1';

if (process.env.URL_API_PROFESORES) {
    API_URL = process.env.URL_API_PROFESORES;
}

let config = {
    headers: {
       //'Content-Type': 'application/x-www-form-urlencoded',
       'content-type': 'application/json',
       'Authorization': 'Bearer ' + localStorage.token
    }
};


export default {
    
    getProfesorByProfesorId(profesorId) {
        return axios.get(API_URL + '/profesores/' + profesorId)
            .then(request => {
                // Devuelvo los datos obtenidos del API externo
                return request.data
            })
        .catch(err => {
            return err
        })
    },

    getProfesorAll() {
        return axios.get(API_URL + '/profesores/')
            .then(request => {
                // Devuelvo los datos obtenidos del API externo
                return request.data
            })
        .catch(err => {
            return err
        })
    },


    getProfesorAllByAutoescuelaId(autoescuelaId) {
        return axios.get(API_URL + '/profesores/' + autoescuelaId + '/autoescuela')
            .then(request => {
                // Devuelvo los datos obtenidos del API externo
                return request.data
            })
        .catch(err => {
            return err
        })
    },


    createProfesor(profesor) {
        return axios.post(
                API_URL + '/profesores/',
                profesor,
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

    updateProfesor(profesor) {
        return axios.put(
                API_URL + '/profesores/' + profesor._id,
                profesor,
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

    deleteProfesor(profesorId) {
        return axios.delete(
                API_URL + '/profesores/' + profesorId,
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