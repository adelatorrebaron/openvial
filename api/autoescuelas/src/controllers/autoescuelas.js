'use strict'

const mongoose = require('mongoose');

const Autoescuela = require('../models/autoescuela');


//
// Permite obtener todas las autoescuelas
//
exports.autoescuelas_get_all =  (req, res, next) => {
    Autoescuela.find()
        .exec()
        .then(docs => {
            res.status(200).json({
                status: 'ok',
                code: 200,
                messages: [],
                result: {
                    total: docs.length,
                    autoescuelas: docs.map(doc => {
                        return {
                            _id: doc._id,
                            usuario_id: doc.usuario_id,
                            denominacion: doc.denominacion,
                            numero_provincial: doc.numero_provincial,
                            seccion: doc.seccion,
                            digito_control: doc.digito_control,
                            numero_secuencial: doc.numero_secuencial,
                            direccion: {
                                via: {
                                    tipo: doc.direccion.via.tipo,
                                    nombre: doc.direccion.via.nombre,
                                    numero: doc.direccion.via.numero,
                                    bloque: doc.direccion.via.bloque,
                                    portal: doc.direccion.via.portal,
                                    escalera: doc.direccion.via.escalera,
                                    planta: doc.direccion.via.planta,
                                    puerta: doc.direccion.via.puerta,
                                    kilometro: doc.direccion.via.kilometro
                                },
                                codigo_postal: doc.direccion.codigo_postal,
                                poblacion: doc.direccion.poblacion,
                                provincia: doc.direccion.provincia,
                                pais: doc.direccion.pais
                            },
                            contacto: {
                                telefono_fijo: doc.contacto.telefono_fijo,
                                telefono_movil: doc.contacto.telefono_movil,
                                whatsapp: doc.contacto.whatsapp,
                                email: doc.contacto.email,
                                website: doc.contacto.website,
                                facebook: doc.contacto.facebook,
                                twitter: doc.contacto.twitter
                            },
                            fecha_creacion: doc.fecha_creacion,
                            estado: doc.estado,
                            request: {
                                descripcion: 'Obtener el registro',
                                type: 'GET',
                                url: req.protocol + '://' + req.headers.host + req.originalUrl + '/' + doc._id
                            }
                        }
                    })
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}
            })
        });
}
   

//
// Permite crear una Autoescuela asociandola al Id del usuario
//
exports.autoescuelas_create = (req, res, next) => {
    const autoescuela = new Autoescuela({
        _id: new mongoose.Types.ObjectId(),
        usuario_id: req.body.usuario_id,
        denominacion: req.body.denominacion,
        numero_provincial: req.body.numero_provincial,
        seccion: req.body.seccion,
        digito_control: req.body.digito_control,
        numero_secuencial: req.body.numero_secuencial,
        direccion: {
            via: {
                tipo: req.body.direccion.via.tipo,
                nombre: req.body.direccion.via.nombre,
                numero: req.body.direccion.via.numero,
                bloque: req.body.direccion.via.bloque,
                portal: req.body.direccion.via.portal,
                escalera: req.body.direccion.via.escalera,
                planta: req.body.direccion.via.planta,
                puerta: req.body.direccion.via.puerta,
                kilometro: req.body.direccion.via.kilometro
            },
            codigo_postal: req.body.direccion.codigo_postal,
            poblacion: req.body.direccion.poblacion,
            provincia: req.body.direccion.provincia,
            pais: req.body.direccion.pais
        },
        contacto: {
            telefono_fijo: req.body.contacto.telefono_fijo,
            telefono_movil: req.body.contacto.telefono_movil,
            whatsapp: req.body.contacto.whatsapp,
            email: req.body.contacto.email,
            website: req.body.contacto.website,
            facebook: req.body.contacto.facebook,
            twitter: req.body.contacto.twitter
        },
        estado: req.body.estado
    });
    autoescuela.save()
        .then(result => {
            res.status(201).json({
                status: 'created',
                code: 201,
                messages: [],
                result: {
                    mensaje: 'Registro creado correctamente',
                    autoescuela: {
                        _id: result._id,
                        usuario_id: result.usuario_id,
                        denominacion: result.denominacion,
                        numero_provincial: result.numero_provincial,
                        seccion: result.seccion,
                        digito_control: result.digito_control,
                        numero_secuencial: result.numero_secuencial,
                        direccion: {
                            via: {
                                tipo: result.direccion.via.tipo,
                                nombre: result.direccion.via.nombre,
                                numero: result.direccion.via.numero,
                                bloque: result.direccion.via.bloque,
                                portal: result.direccion.via.portal,
                                escalera: result.direccion.via.escalera,
                                planta: result.direccion.via.planta,
                                puerta: result.direccion.via.puerta,
                                kilometro: result.direccion.via.kilometro
                            },
                            codigo_postal: result.direccion.codigo_postal,
                            poblacion: result.direccion.poblacion,
                            provincia: result.direccion.provincia,
                            pais: result.direccion.pais
                        },
                        contacto: {
                            telefono_fijo: result.contacto.telefono_fijo,
                            telefono_movil: result.contacto.telefono_movil,
                            whatsapp: result.contacto.whatsapp,
                            email: result.contacto.email,
                            website: result.contacto.website,
                            facebook: result.contacto.facebook,
                            twitter: result.contacto.twitter
                        },
                        fecha_creacion: result.fecha_creacion,
                        estado: result.estado,                    
                        request: {
                            descripcion: 'Obtener registro creado',
                            type: 'GET',
                            url: req.protocol + '://' + req.headers.host + req.originalUrl + '/' + result._id
                        }
                    }
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}
            })
        });
}


//
// Permite obtener una Autoescuela por el Id del Usuario
//
exports.autoescuelas_get_by_usuarioId = (req, res, next) => {
    const usuario_id = req.params.usuarioId;
    //var usuario_id = new mongoose.Types.ObjectId(id);
    //Autoescuela.findById(id)
    Autoescuela.findOne({'usuario_id': usuario_id})
        .exec()
        .then(doc => {
            if (doc){
                res.status(200).json({
                    status: "ok",
                    code: 200,
                    messages: [],
                    result: {
                        autoescuela: {
                            _id: doc._id,
                            usuario_id: doc.usuario_id,
                            denominacion: doc.denominacion,
                            numero_provincial: doc.numero_provincial,
                            seccion: doc.seccion,
                            digito_control: doc.digito_control,
                            numero_secuencial: doc.numero_secuencial,
                            direccion: {
                                via: {
                                    tipo: doc.direccion.via.tipo,
                                    nombre: doc.direccion.via.nombre,
                                    numero: doc.direccion.via.numero,
                                    bloque: doc.direccion.via.bloque,
                                    portal: doc.direccion.via.portal,
                                    escalera: doc.direccion.via.escalera,
                                    planta: doc.direccion.via.planta,
                                    puerta: doc.direccion.via.puerta,
                                    kilometro: doc.direccion.via.kilometro
                                },
                                codigo_postal: doc.direccion.codigo_postal,
                                poblacion: doc.direccion.poblacion,
                                provincia: doc.direccion.provincia,
                                pais: doc.direccion.pais
                            },
                            contacto: {
                                telefono_fijo: doc.contacto.telefono_fijo,
                                telefono_movil: doc.contacto.telefono_movil,
                                whatsapp: doc.contacto.whatsapp,
                                email: doc.contacto.email,
                                website: doc.contacto.website,
                                facebook: doc.contacto.facebook,
                                twitter: doc.contacto.twitter
                            },
                            fecha_creacion: doc.fecha_creacion,
                            estado: doc.estado,
                            request: {
                                descripcion: 'Obtener todos los registros',
                                type: 'GET',
                                url: req.protocol + '://' + req.headers.host + '/' + req.originalUrl.split('/')[1] + '/' + req.originalUrl.split('/')[2] + '/' + req.originalUrl.split('/')[3]
                            }
                        }
                    }
                });
            } else {
                res.status(200).json({
                    status: "Not found",
                    code: 404,
                    messages: [{mensaje:'Registro no encontrado'}],
                    result: {}
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}
            })
        });
}


//
// Permite actualizar los datos de la Autoescuela
//
exports.autoescuelas_update = (req, res, next) => {
    const id = req.params.autoescuelaId;
    const update = req.body;

    Autoescuela.updateOne({_id: id}, {$set: update})
        .exec()
        .then(result => {
            res.status(200).json({
                status: "ok",
                code: 200,
                messages: [],
                result: {                
                    mensaje: 'Registro actualizado correctamente',
                    request: {
                        descripcion: 'Obtener registro actualizado',
                        type: 'GET',
                        url: req.protocol + '://' + req.headers.host + req.originalUrl
                    }
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}
            })
        });
}


//
// Permite eliminar una Autoescuela por el Id de la Autoescuela
//
exports.autoescuelas_delete = (req, res, next) => {
    const id = req.params.autoescuelaId;
    Autoescuela.deleteOne({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                status: "ok",
                code: 200,
                messages: [],
                result: {
                    mensaje: 'Registro eliminado correctamente',
                    request: {
                        descripcion: 'Crear un nuevo registro',
                        type: 'POST',
                        url: req.protocol + '://' + req.headers.host + '/' + req.originalUrl.split('/')[1] + '/' + req.originalUrl.split('/')[2] +  '/' + req.originalUrl.split('/')[3],
                        body: {
                            denominacion: 'String',
                            numero_provincial: 'String',
                            seccion: 'Number',
                            digito_control: 'Number',
                            numero_secuencial: 'Number',
                            direccion: {
                                via: {
                                    tipo: 'String',
                                    nombre: 'String',
                                    numero: 'String',
                                    bloque: 'String',
                                    portal: 'String',
                                    escalera: 'String',
                                    planta: 'String',
                                    puerta: 'String',
                                    kilometro: 'String'
                                },
                                codigo_postal: 'String',
                                poblacion: 'String',
                                provincia: 'String',
                                pais: 'String'
                            },
                            contacto: {
                                telefono_fijo: 'String',
                                telefono_movil: 'String',
                                whatsapp: 'String',
                                email: 'String',
                                website: 'String',
                                facebook: 'String',
                                twitter: 'String'
                            },
                            estado: 'Boolean'
                        }
                    }
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}
            })
        });
}