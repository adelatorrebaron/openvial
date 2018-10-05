import axios from 'axios'

let API_URL = 'http://localhost:3005/api/v1';

if (process.env.URL_API_VEHICULOS) {
    API_URL = process.env.URL_API_VEHICULOS;
}

let config = {
    headers: {
       //'Content-Type': 'application/x-www-form-urlencoded',
       'content-type': 'application/json',
       'Authorization': 'Bearer ' + localStorage.token
    }
};


export default {
    
    getVehiculoByVehiculoId(vehiculoId) {
        return axios.get(API_URL + '/vehiculos/' + vehiculoId)
            .then(request => {
                // Devuelvo los datos obtenidos del API externo
                return request.data
            })
        .catch(err => {
            return err
        })
    },

    getVehiculoAll() {
        const url = API_URL + '/vehiculos/'
        return axios.get(url)
            .then(request => {
                // Devuelvo los datos obtenidos del API externo
                return request.data
            })
        .catch(err => {
            return err
        })
    },

    createVehiculo(vehiculo) {
        return axios.post(
                API_URL + '/vehiculos/',
                vehiculo,
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

    updateVehiculo(vehiculo) {
        return axios.put(
                API_URL + '/vehiculos/' + vehiculo._id,
                vehiculo,
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

    deleteVehiculo(vehiculoId) {
        return axios.delete(
                API_URL + '/vehiculos/' + vehiculoId,
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