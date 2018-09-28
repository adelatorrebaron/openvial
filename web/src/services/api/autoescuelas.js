import axios from 'axios'

//let API_URL = 'http://localhost:8080/api/v1';
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
        //console.log("Imprimiendo de services api autoescuelas")
        //console.log(currentUser.id)
        return axios.get(API_URL + '/autoescuelas/?usuarioId=' + usuarioId)
            .then(request => {
                //console.log(request.data.autoescuelas[0])
                return request.data.autoescuelas[0]
            })
        .catch(err => {
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