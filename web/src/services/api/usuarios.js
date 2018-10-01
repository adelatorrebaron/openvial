import axios from 'axios'

let API_URL = 'http://localhost:3001/api/v1';

if (process.env.URL_API_USUARIOS) {
    API_URL = process.env.URL_API_USUARIOS;
}

let config = {
    headers: {
       //'Content-Type': 'application/x-www-form-urlencoded',
       'content-type': 'application/json',
       'Authorization': 'Bearer ' + localStorage.token
    }
};


export default {
    
    getUsuarioByUserId(usuarioId) {
        return axios.get(API_URL + '/usuarios/' + usuarioId)
            .then(request => {
                // Devuelvo los datos obtenidos del API externo
                return request.data
            })
        .catch(err => {
            return err
        })
    },

    updateUsuarioPerfil(usuario) {
        const datosPerfil = [
            {"propName": "perfil.contacto.telefono_fijo", "value": usuario.perfil.contacto.telefono_fijo},
            {"propName": "perfil.contacto.telefono_movil", "value": usuario.perfil.contacto.telefono_movil},
            {"propName": "perfil.contacto.whatsapp", "value": usuario.perfil.contacto.whatsapp},
            {"propName": "perfil.contacto.website", "value": usuario.perfil.contacto.website},
            {"propName": "perfil.contacto.facebook", "value": usuario.perfil.contacto.facebook},
            {"propName": "perfil.contacto.twitter", "value": usuario.perfil.contacto.twitter},
            {"propName": "perfil.educacion", "value": usuario.perfil.educacion},
            {"propName": "perfil.notas", "value": usuario.perfil.notas},
            {"propName": "perfil.avatar", "value": usuario.perfil.avatar}
        ]
        return axios.patch(
                API_URL + '/usuarios/' + usuario._id,
                datosPerfil,
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