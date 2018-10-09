import axios from 'axios'

let API_URL = 'http://localhost:3006/api/v1';

if (process.env.URL_API_CLASES_PRACTICAS) {
    API_URL = process.env.URL_API_CLASES_PRACTICAS;
}

let config = {
    headers: {
       //'Content-Type': 'application/x-www-form-urlencoded',
       'content-type': 'application/json',
       'Authorization': 'Bearer ' + localStorage.token
    }
};


export default {
    
    getClasePracticaByClasePracticaId(clasePracticaId) {
        return axios.get(API_URL + '/clases_practicas/' + clasePracticaId)
            .then(request => {
                // Devuelvo los datos obtenidos del API externo
                return request.data
            })
        .catch(err => {
            return err
        })
    },
    
    getClasePracticaAll() {
        return axios.get(API_URL + '/clases_practicas/')
            .then(request => {
                // Devuelvo los datos obtenidos del API externo
                return request.data
            })
        .catch(err => {
            return err
        })
    },

    getClasePracticaAllByAutoescuelaId(autoescuelaId) {
        return axios.get(API_URL + '/clases_practicas/' + autoescuelaId + '/autoescuela')
            .then(request => {
                // Devuelvo los datos obtenidos del API externo
                return request.data
            })
        .catch(err => {
            return err
        })
    },

    createClasePractica(clasePractica) {
        return axios.post(
                API_URL + '/clases_practicas/',
                clasePractica,
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

    updateClasePractica(clasePractica) {
        return axios.put(
                API_URL + '/clases_practicas/' + clasePractica._id,
                clasePractica,
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

    deleteClasePractica(clasePracticaId) {
        return axios.delete(
                API_URL + '/clases_practicas/' + clasePracticaId,
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