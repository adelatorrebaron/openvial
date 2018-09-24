import axios from 'axios'

let API_URL = 'http://localhost:8080/api/v1';

let config = {
    headers: {
       //'Content-Type': 'application/x-www-form-urlencoded',
       'content-type': 'application/json',
    }
};


export default {
    getAutoescuelaByUserId(currentUser) {
        return axios.get(API_URL + '/autoescuelas/?usuarioId=' + currentUser.id)
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