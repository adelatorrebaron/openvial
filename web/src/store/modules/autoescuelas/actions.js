
import autoescuelasApi from '../../api/autoescuelas.js'

const prueba = {
    '_id': 'doc._id',
    'usuario_id': 'doc.usuario_id',
    'denominacion': 'doc.denominacion',
    'numero_provincial': 'doc.numero_provincial',
    'seccion': 'doc.seccion',
    'digito_control': 'doc.digito_control',
    'numero_secuencial': 'doc.numero_secuencial',
    'direccion': {
        'via': {
            'tipo': 'doc.direccion.via.tipo',
            'nombre': 'doc.direccion.via.nombre',
            'numero': 'doc.direccion.via.numero',
            'bloque': 'doc.direccion.via.bloque',
            'portal': 'doc.direccion.via.portal',
            'escalera': 'doc.direccion.via.escalera',
            'planta': 'doc.direccion.via.planta',
            'puerta': 'doc.direccion.via.puerta',
            'kilometro': 'doc.direccion.via.kilometro'
        },
        'codigo_postal': 'doc.direccion.codigo_postal',
        'poblacion': 'doc.direccion.poblacion',
        'provincia': 'doc.direccion.provincia',
        'pais': 'doc.direccion.pais'
    },
    'contacto': {
        'telefono_fijo': 'doc.contacto.telefono_fijo',
        'telefono_movil': 'doc.contacto.telefono_movil',
        'whatsapp': 'doc.contacto.whatsapp',
        'email': 'doc.contacto.email',
        'website': 'doc.contacto.website',
        'facebook': 'doc.contacto.facebook',
        'twitter': 'doc.contacto.twitter'
    },
    'fecha_creacion': 'doc.fecha_creacion',
    'estado': 'doc.estado'
}


const loadAutoescuela = ( {commit}, currentUser ) => {

    return autoescuelasApi.getAutoescuelas(currentUser)
        .then(data => {
            console.log(data)
            commit('SET_AUTOESCUELA', data)
        })
    //commit('SET_AUTOESCUELA', prueba)
/*
     Vue.http.get('/autoescuelas/?usuarioId=' + this.currentUser.id)
        .then(request => {
            
            console.log(request.data.autoescuelas[0])
            if (request.data.autoescuelas[0]) {
                commit('SET_AUTOESCUELA', request.data.autoescuelas[0])
            }

          })
        .catch(err => {
          //this.loginFailed(err)
          })
 */
}

const unloadAutoescuela = ( context ) => {
    context.commit('UNSET_AUTOESCUELA')
}



export default {
    loadAutoescuela,
    unloadAutoescuela
}