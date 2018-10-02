'use strict'

const mongoose = require('mongoose');

const Alumno = require('../models/alumno');

//
// Permite obtener todas los alumnos
//
exports.alumnos_get_all =  (req, res, next) => {
    Alumno.find()
        .exec()
        .then(docs => {
            res.status(200).json({
                status: 'ok',
                code: 200,
                messages: [],
                result: {
                    total: docs.length,
                    alumnos: docs.map(doc => {
                        return {
                            _id: doc._id,
                            autoescuela_id: doc.autoescuela_id,
                            dni: doc.dni,
                            dni_fecha_caducidad: doc.dni_fecha_caducidad,
                            nombre: doc.nombre,
                            primer_apellido: doc.primer_apellido,
                            segundo_apellido: doc.segundo_apellido,
                            sexo: doc.sexo,
                            fecha_nacimiento: doc.fecha_nacimiento,
                            pais_nacimiento: doc.pais_nacimiento,
                            nacionalidad: doc.nacionalidad,
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
                                facebook: doc.contacto.facebook,
                                twitter: doc.contacto.twitter
                            },
                            documentacion_aportada: {
                                entrega_fotocopia_dni: doc.documentacion_aportada.entrega_fotocopia_dni,
                                entrega_psicotecnico: doc.documentacion_aportada.entrega_psicotecnico,
                                entrega_fotografias: doc.documentacion_aportada.entrega_fotografias,
                                firma_tasas_examen: doc.documentacion_aportada.firma_tasas_examen,
                                firma_autorizacion: doc.documentacion_aportada.firma_autorizacion,
                                firma_talon_foto: doc.documentacion_aportada.firma_talon_foto
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
// Permite crear un Alumno asociandolo al Id de la Autoescuela
//
exports.alumnos_create = (req, res, next) => {
    const alumno = new Alumno({
        _id: new mongoose.Types.ObjectId(),
        autoescuela_id: req.body.autoescuela_id,
        dni: req.body.dni,
        dni_fecha_caducidad: req.body.dni_fecha_caducidad,
        nombre: req.body.nombre,
        primer_apellido: req.body.primer_apellido,
        segundo_apellido: req.body.segundo_apellido,
        sexo: req.body.sexo,
        fecha_nacimiento: req.body.fecha_nacimiento,
        pais_nacimiento: req.body.pais_nacimiento,
        nacionalidad: req.body.nacionalidad,
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
            facebook: req.body.contacto.facebook,
            twitter: req.body.contacto.twitter
        },
        documentacion_aportada: {
            entrega_fotocopia_dni: req.body.documentacion_aportada.entrega_fotocopia_dni,
            entrega_psicotecnico: req.body.documentacion_aportada.entrega_psicotecnico,
            entrega_fotografias: req.body.documentacion_aportada.entrega_fotografias,
            firma_tasas_examen: req.body.documentacion_aportada.firma_tasas_examen,
            firma_autorizacion: req.body.documentacion_aportada.firma_autorizacion,
            firma_talon_foto: req.body.documentacion_aportada.firma_talon_foto
        },        
        estado: req.body.estado
    });
    alumno.save()
        .then(result => {
            res.status(201).json({
                status: 'created',
                code: 201,
                messages: [],
                result: {
                    mensaje: 'Registro creado correctamente',
                    alumno: {
                        _id: result._id,
                        autoescuela_id: result.autoescuela_id,
                        dni: result.dni,
                        dni_fecha_caducidad: result.dni_fecha_caducidad,
                        nombre: result.nombre,
                        primer_apellido: result.primer_apellido,
                        segundo_apellido: result.segundo_apellido,
                        sexo: result.sexo,
                        fecha_nacimiento: result.fecha_nacimiento,
                        pais_nacimiento: result.pais_nacimiento,
                        nacionalidad: result.nacionalidad,
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
                            facebook: result.contacto.facebook,
                            twitter: result.contacto.twitter
                        },
                        documentacion_aportada: {
                            entrega_fotocopia_dni: result.documentacion_aportada.entrega_fotocopia_dni,
                            entrega_psicotecnico: result.documentacion_aportada.entrega_psicotecnico,
                            entrega_fotografias: result.documentacion_aportada.entrega_fotografias,
                            firma_tasas_examen: result.documentacion_aportada.firma_tasas_examen,
                            firma_autorizacion: result.documentacion_aportada.firma_autorizacion,
                            firma_talon_foto: result.documentacion_aportada.firma_talon_foto
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
// Permite obtener un Alumno por el Id del Alumno
//
exports.alumnos_get_by_alumnoId = (req, res, next) => {
    const alumno_id = req.params.alumnoId;
    Alumno.findById(alumno_id)
        .exec()
        .then(doc => {
            if (doc){
                res.status(200).json({
                    status: "ok",
                    code: 200,
                    messages: [],
                    result: {
                        alumno: {
                            _id: doc._id,
                            autoescuela_id: doc.autoescuela_id,
                            dni: doc.dni,
                            dni_fecha_caducidad: doc.dni_fecha_caducidad,
                            nombre: doc.nombre,
                            primer_apellido: doc.primer_apellido,
                            segundo_apellido: doc.segundo_apellido,
                            sexo: doc.sexo,
                            fecha_nacimiento: doc.fecha_nacimiento,
                            pais_nacimiento: doc.pais_nacimiento,
                            nacionalidad: doc.nacionalidad,
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
                                whatsapp: doc.whatsapp,
                                email: doc.contacto.email,
                                facebook: doc.contacto.facebook,
                                twitter: doc.contacto.twitter
                            },
                            documentacion_aportada: {
                                entrega_fotocopia_dni: doc.documentacion_aportada.entrega_fotocopia_dni,
                                entrega_psicotecnico: doc.documentacion_aportada.entrega_psicotecnico,
                                entrega_fotografias: doc.documentacion_aportada.entrega_fotografias,
                                firma_tasas_examen: doc.documentacion_aportada.firma_tasas_examen,
                                firma_autorizacion: doc.documentacion_aportada.firma_autorizacion,
                                firma_talon_foto: doc.documentacion_aportada.firma_talon_foto
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
// Permite actualizar los datos del Alumno
//
exports.alumnos_update = (req, res, next) => {
    const id = req.params.alumnoId;
    const update = req.body;

    Alumno.updateOne({_id: id}, {$set: update})
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
// Permite eliminar un Alumno por el Id del alumno
//
exports.alumnos_delete = (req, res, next) => {
    const id = req.params.alumnoId;
    Alumno.deleteOne({_id: id})
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
                            autoescuela_id: 'ObjectId',
                            dni: 'String',
                            dni_fecha_caducidad: 'Date',
                            nombre: 'String',
                            primer_apellido: 'String',
                            segundo_apellido: 'String',
                            sexo: 'String',
                            fecha_nacimiento: 'Date',
                            pais_nacimiento: 'String',
                            nacionalidad: 'String',
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
                                facebook: 'String',
                                twitter: 'String'
                            },
                            documentacion_aportada: {
                                entrega_fotocopia_dni: 'Boolean',
                                entrega_psicotecnico: 'Boolean',
                                entrega_fotografias: 'Boolean',
                                firma_tasas_examen: 'Boolean',
                                firma_autorizacion: 'Boolean',
                                firma_talon_foto: 'Boolean'
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