import axios from 'axios'

let API_URL = 'http://localhost:8080/api/v1';

export default {
    getAutoescuelas(currentUser) {
        return axios.get('http://localhost:8080/api/v1/autoescuelas/?usuarioId=' + currentUser.id)
            .then(request => {
                console.log(request.data.autoescuelas[0])
                return request.data.autoescuelas[0]
            })
        .catch(err => {
          //this.loginFailed(err)
        })
    }
}