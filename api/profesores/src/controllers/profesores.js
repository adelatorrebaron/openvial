'use strict'

const mongoose = require('mongoose');

const Profesor = require('../models/profesor');

const moment = require('moment');


//
// Permite obtener todos los profesores
//
exports.profesores_get_all =  (req, res, next) => {
    Profesor.find()
        .exec()
        .then(docs => {
            res.status(200).json({
                status: 'ok',
                code: 200,
                messages: [],
                result: {
                    total: docs.length,
                    profesores: docs.map(doc => {
                        return {
                            _id: doc._id,
                            autoescuela_id: doc.autoescuela_id,
                            numero_profesor: doc.numero_profesor,
                            dni: doc.dni,
                            dni_fecha_caducidad: moment(doc.dni_fecha_caducidad, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                            nombre: doc.nombre,
                            primer_apellido: doc.primer_apellido,
                            segundo_apellido: doc.segundo_apellido,
                            sexo: doc.sexo,
                            fecha_nacimiento: moment(doc.fecha_nacimiento, 'YYYY-MM-DD').format('DD/MM/YYYY'),
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
                            permisos_conduccion: doc.permisos_conduccion.map(permiso => {
                                return {
                                    tipo: permiso.tipo,
                                    fecha_antiguedad: moment(permiso.fecha_antiguedad, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                                    fecha_caducidad: moment(permiso.fecha_caducidad, 'YYYY-MM-DD').format('DD/MM/YYYY')
                                }
                            }),
                            datos_bancarios: {
                                nombre_entidad: doc.datos_bancarios.nombre_entidad,
                                codigo_iban: doc.datos_bancarios.codigo_iban,
                                codigo_entidad: doc.datos_bancarios.codigo_entidad,
                                codigo_oficina: doc.datos_bancarios.codigo_oficina,
                                digito_control: doc.datos_bancarios.digito_control,
                                numero_de_cuenta: doc.datos_bancarios.numero_de_cuenta
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
            console.log(err)
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}
            })
        });
}



//
// Permite obtener todos los profesores de una Autoescuela
//
exports.profesores_get_all_by_autoescuelaId =  (req, res, next) => {
    const autoescuelaId = req.params.autoescuelaId;
    Profesor.find({autoescuela_id: autoescuelaId})
        .exec()
        .then(docs => {
            res.status(200).json({
                status: 'ok',
                code: 200,
                messages: [],
                result: {
                    total: docs.length,
                    profesores: docs.map(doc => {
                        return {
                            _id: doc._id,
                            autoescuela_id: doc.autoescuela_id,
                            numero_profesor: doc.numero_profesor,
                            dni: doc.dni,
                            dni_fecha_caducidad: moment(doc.dni_fecha_caducidad, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                            nombre: doc.nombre,
                            primer_apellido: doc.primer_apellido,
                            segundo_apellido: doc.segundo_apellido,
                            sexo: doc.sexo,
                            fecha_nacimiento: moment(doc.fecha_nacimiento, 'YYYY-MM-DD').format('DD/MM/YYYY'),
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
                            permisos_conduccion: doc.permisos_conduccion.map(permiso => {
                                return {
                                    tipo: permiso.tipo,
                                    fecha_antiguedad: moment(permiso.fecha_antiguedad, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                                    fecha_caducidad: moment(permiso.fecha_caducidad, 'YYYY-MM-DD').format('DD/MM/YYYY')
                                }
                            }),
                            datos_bancarios: {
                                nombre_entidad: doc.datos_bancarios.nombre_entidad,
                                codigo_iban: doc.datos_bancarios.codigo_iban,
                                codigo_entidad: doc.datos_bancarios.codigo_entidad,
                                codigo_oficina: doc.datos_bancarios.codigo_oficina,
                                digito_control: doc.datos_bancarios.digito_control,
                                numero_de_cuenta: doc.datos_bancarios.numero_de_cuenta
                            },
                            fecha_creacion: moment(doc.fecha_creacion, 'YYYY-MM-DD').format('DD/MM/YYYY'),
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
            console.log(err)
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}
            })
        });
}



//
// Permite crear un Profesor asociandolo al Id de la Autoescuela
//
exports.profesores_create = (req, res, next) => {
    const profesor = new Profesor({
        _id: new mongoose.Types.ObjectId(),
        autoescuela_id: req.body.autoescuela_id,
        numero_profesor: req.body.numero_profesor,
        dni: req.body.dni,
        dni_fecha_caducidad: moment(req.body.dni_fecha_caducidad, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        nombre: req.body.nombre,
        primer_apellido: req.body.primer_apellido,
        segundo_apellido: req.body.segundo_apellido,
        sexo: req.body.sexo,
        fecha_nacimiento: moment(req.body.fecha_nacimiento, 'DD/MM/YYYY').format('YYYY-MM-DD'),
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
        permisos_conduccion: req.body.permisos_conduccion.map(permiso => {
            return {
                tipo: permiso.tipo,
                fecha_antiguedad: permiso.fecha_antiguedad ? moment(permiso.fecha_antiguedad, 'DD/MM/YYYY').format('YYYY-MM-DD') : '',
                fecha_caducidad: permiso.fecha_caducidad ? moment(permiso.fecha_caducidad, 'DD/MM/YYYY').format('YYYY-MM-DD') : ''
            }
        }),
        datos_bancarios: {
            nombre_entidad: req.body.datos_bancarios.nombre_entidad,
            codigo_iban: req.body.datos_bancarios.codigo_iban,
            codigo_entidad: req.body.datos_bancarios.codigo_entidad,
            codigo_oficina: req.body.datos_bancarios.codigo_oficina,
            digito_control: req.body.datos_bancarios.digito_control,
            numero_de_cuenta: req.body.datos_bancarios.numero_de_cuenta
        },        
        estado: req.body.estado
    });
    profesor.save()
        .then(result => {
            res.status(201).json({
                status: 'created',
                code: 201,
                messages: [],
                result: {
                    mensaje: 'Registro creado correctamente',
                    profesor: {
                        _id: result._id,
                        autoescuela_id: result.autoescuela_id,
                        numero_profesor: result.numero_profesor,
                        dni: result.dni,
                        dni_fecha_caducidad: moment(result.dni_fecha_caducidad,'YYYY-MM-DD').format('DD/MM/YYYY'),
                        nombre: result.nombre,
                        primer_apellido: result.primer_apellido,
                        segundo_apellido: result.segundo_apellido,
                        sexo: result.sexo,
                        fecha_nacimiento: moment(result.fecha_nacimiento,'YYYY-MM-DD').format('DD/MM/YYYY'),
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
                        permisos_conduccion: result.permisos_conduccion.map(permiso => {
                            return {
                                tipo: permiso.tipo,
                                fecha_antiguedad: moment(permiso.fecha_antiguedad,'YYYY-MM-DD').format('DD/MM/YYYY'),
                                fecha_caducidad: moment(permiso.fecha_caducidad,'YYYY-MM-DD').format('DD/MM/YYYY')
                            }
                        }),
                        datos_bancarios: {
                            nombre_entidad: result.datos_bancarios.nombre_entidad,
                            codigo_iban: result.datos_bancarios.codigo_iban,
                            codigo_entidad: result.datos_bancarios.codigo_entidad,
                            codigo_oficina: result.datos_bancarios.codigo_oficina,
                            digito_control: result.datos_bancarios.digito_control,
                            numero_de_cuenta: result.datos_bancarios.numero_de_cuenta
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
            console.log(err)
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}
            })
        });
}



//
// Permite obtener un Profesor por el Id del Profesor
//
exports.profesores_get_by_profesorId = (req, res, next) => {
    const profesor_id = req.params.profesorId;
    Profesor.findById(profesor_id)
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
                            numero_profesor: doc.numero_profesor,
                            dni: doc.dni,
                            dni_fecha_caducidad: moment(doc.dni_fecha_caducidad, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                            nombre: doc.nombre,
                            primer_apellido: doc.primer_apellido,
                            segundo_apellido: doc.segundo_apellido,
                            sexo: doc.sexo,
                            fecha_nacimiento: moment(doc.fecha_nacimiento, 'YYYY-MM-DD').format('DD/MM/YYYY'),
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
                            permisos_conduccion: doc.permisos_conduccion.map(permiso => {
                                return {
                                    tipo: permiso.tipo,
                                    fecha_antiguedad: moment(permiso.fecha_antiguedad, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                                    fecha_caducidad: moment(permiso.fecha_caducidad, 'YYYY-MM-DD').format('DD/MM/YYYY')
                                }
                            }),
                            datos_bancarios: {
                                nombre_entidad: doc.datos_bancarios.nombre_entidad,
                                codigo_iban: doc.datos_bancarios.codigo_iban,
                                codigo_entidad: doc.datos_bancarios.codigo_entidad,
                                codigo_oficina: doc.datos_bancarios.codigo_oficina,
                                digito_control: doc.datos_bancarios.digito_control,
                                numero_de_cuenta: doc.datos_bancarios.numero_de_cuenta
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
// Permite actualizar los datos del Profesor
//
exports.profesores_update = (req, res, next) => {
    const id = req.params.profesorId;
    const update = req.body;

    // Cambio de formato de las fechas pasadas que estan en "00/00/0000" y hay que pasarlas a "0000-00-00" en MongoDB
    const dni_fecha_caducidad   = moment(req.body.dni_fecha_caducidad, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const fecha_nacimiento      = moment(req.body.fecha_nacimiento, 'DD/MM/YYYY').format('YYYY-MM-DD');
    update.dni_fecha_caducidad  = dni_fecha_caducidad;
    update.fecha_nacimiento     = fecha_nacimiento;

    
    // Mapeo los permisos de conduccion en una variable para reasignar las fechas
    const permisos_conduccion = req.body.permisos_conduccion.map(permiso => {
        return {
            tipo: permiso.tipo,
            fecha_antiguedad: moment(permiso.fecha_antiguedad, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            fecha_caducidad: moment(permiso.fecha_caducidad, 'DD/MM/YYYY').format('YYYY-MM-DD')
        }
    })
    update.permisos_conduccion = permisos_conduccion;


    Profesor.updateOne({_id: id}, {$set: update})
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
// Permite eliminar un Profesor por el Id del profesor
//
exports.profesores_delete = (req, res, next) => {
    const id = req.params.profesorId;
    Profesor.deleteOne({_id: id})
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
                            numero_profesor: 'String',
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
                            permisos_conduccion: [
                                {
                                    tipo: 'String',
                                    fecha_antiguedad: 'Date',
                                    fecha_caducidad: 'Date'
                                }
                            ],
                            datos_bancarios: {
                                nombre_entidad: 'String',
                                codigo_iban: 'String',
                                codigo_entidad: 'String',
                                codigo_oficina: 'String',
                                digito_control: 'String',
                                numero_de_cuenta: 'String'
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
