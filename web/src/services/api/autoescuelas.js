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
        //console.log("IMPRIMIENDO DESDE SERVICES->API->AUTOESCUELAS")
        //console.log("El usuario actual es: " + usuarioId)
        //return axios.get(API_URL + '/autoescuelas/?usuarioId=' + usuarioId)
        return axios.get(API_URL + '/autoescuelas/' + usuarioId)
            .then(request => {
                //console.log(request)
                
                /////////////////////////////////////////////////////
                // HASTA AQUI TODO CORRECTO
                //////////////////////////////////////////////////////
                //console.log('Hasta aqui todo correcto')
                //console.log(request.data)
                //return request.data.autoescuelas[0]
                //console.log('SALIDA DEL METODO SERVICE->API->AUTOESCUELAS->GETAUTOESCUELABYUSERID')
                return request.data
                
            })
        .catch(err => {
            console.log("Aqui controlo el error producido")
            return err
            
            //console.log(err)
          //this.loginFailed(err)
            })
    },
    saveAutoescuela(autoescuela) {
        //console.log(autoescuela)
        return axios.post(
                API_URL + '/autoescuelas/',
                autoescuela,
                config
            )
            .then(response => {
                //console.log(response.data)
                return response
            })
            .catch(e => {
                
            })
    }
}