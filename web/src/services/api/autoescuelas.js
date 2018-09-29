import axios from 'axios'

let API_URL = 'http://localhost:3002/api/v1';

if (process.env.URL_API_AUTOESCUELAS) {
    API_URL = process.env.URL_API_AUTOESCUELAS;
}

let config = {
    headers: {
       //'Content-Type': 'application/x-www-form-urlencoded',
       'content-type': 'application/json',
       'Authorization': 'Bearer ' + localStorage.token
    }
};


export default {
    
    getAutoescuelaByUserId(usuarioId) {
        return axios.get(API_URL + '/autoescuelas/' + usuarioId)
            .then(request => {
                // Devuelvo los datos obtenidos del API externo
                return request.data
            })
        .catch(err => {
            return err
        })
    },

    saveAutoescuela(autoescuela) {
        return axios.post(
                API_URL + '/autoescuelas/',
                autoescuela,
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