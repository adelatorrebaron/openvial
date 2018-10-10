import axios from 'axios'


let URL_API   = 'http://localhost:3010/api/v1';

if (process.env.URL_API_CORREOS) {
    URL_API = process.env.URL_API_CORREOS;
}

let config = {
    headers: {
       //'Content-Type': 'application/x-www-form-urlencoded',
       'content-type': 'application/json',
       'Authorization': 'Bearer ' + localStorage.token
    }
};


export default {

    sendMail(templateName, userMail) {

        const payload = {
            template_name: templateName,
            user_email: userMail
        }

        return axios.post(
            URL_API + '/correos/enviar/',
            payload,
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