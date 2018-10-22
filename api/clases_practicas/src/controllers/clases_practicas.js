'use strict'

const mongoose = require('mongoose');

const Clase = require('../models/clase_practica');

const moment = require('moment');

//
// Permite obtener todas las clases
//
exports.clases_practicas_get_all =  (req, res, next) => {
    Clase.find()
        .exec()
        .then(docs => {
            res.status(200).json({
                status: 'ok',
                code: 200,
                messages: [],
                result: {
                    total: docs.length,
                    clases_practicas: docs.map(doc => {
                        return {
                            _id: doc._id,
                            autoescuela_id: doc.autoescuela_id,
                            profesor_id: doc.profesor_id,
                            alumno_id: doc.alumno_id,
                            vehiculo_id: doc.vehiculo_id,                            
                            fecha_clase: moment(doc.fecha_clase).format('DD/MM/YYYY'),
                            hora_inicio: moment(doc.hora_inicio).format('HH:mm'),
                            hora_finalizacion: moment(doc.hora_finalizacion).format('HH:mm'),
                            descripcion_recorrido: doc.descripcion_recorrido,
                            errores_cometidos_alumno: doc.errores_cometidos_alumno,
                            fecha_creacion: moment(doc.fecha_creacion).format('DD/MM/YYYY'),
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
// Permite obtener todas las clases de una autoescuela
//
exports.clases_practicas_get_all_by_autoescuelaId =  (req, res, next) => {
    const autoescuelaId = req.params.autoescuelaId;
    Clase.find({autoescuela_id: autoescuelaId})
        .exec()
        .then(docs => {
            res.status(200).json({
                status: 'ok',
                code: 200,
                messages: [],
                result: {
                    total: docs.length,
                    clases_practicas: docs.map(doc => {
                        return {
                            _id: doc._id,
                            autoescuela_id: doc.autoescuela_id,
                            profesor_id: doc.profesor_id,
                            alumno_id: doc.alumno_id,
                            vehiculo_id: doc.vehiculo_id,                            
                            fecha_clase: moment(doc.fecha_clase).format('DD/MM/YYYY'),
                            hora_inicio: moment(doc.hora_inicio).format('HH:mm'),
                            hora_finalizacion: moment(doc.hora_finalizacion).format('HH:mm'),
                            descripcion_recorrido: doc.descripcion_recorrido,
                            errores_cometidos_alumno: doc.errores_cometidos_alumno,
                            fecha_creacion: moment(doc.fecha_creacion).format('DD/MM/YYYY'),
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
// Permite crear una clase practica asociandola al Id de la Autoescuela y respectivos id de otros micro-servicios
//
exports.clases_practicas_create = (req, res, next) => {
    const clase = new Clase({
        _id: new mongoose.Types.ObjectId(),
        autoescuela_id: req.body.autoescuela_id,
        profesor_id: req.body.profesor_id,
        alumno_id: req.body.alumno_id,
        vehiculo_id: req.body.vehiculo_id,                            
        fecha_clase: moment(req.body.fecha_clase, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        hora_inicio: moment(req.body.hora_inicio, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm'),
        hora_finalizacion: moment(req.body.hora_finalizacion, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm'),
        descripcion_recorrido: req.body.descripcion_recorrido,
        errores_cometidos_alumno: req.body.errores_cometidos_alumno
    });
    clase.save()
        .then(result => {
            res.status(201).json({
                status: 'created',
                code: 201,
                messages: [],
                result: {
                    mensaje: 'Registro creado correctamente',
                    clase_practica: {
                        _id: result._id,
                        autoescuela_id: result.autoescuela_id,
                        profesor_id: result.profesor_id,
                        alumno_id: result.alumno_id,
                        vehiculo_id: result.vehiculo_id,                            
                        fecha_clase: moment(result.fecha_clase).format('DD/MM/YYYY'),
                        hora_inicio: moment(result.hora_inicio).format('HH:mm'),
                        hora_finalizacion: moment(result.hora_finalizacion).format('HH:mm'),
                        descripcion_recorrido: result.descripcion_recorrido,
                        errores_cometidos_alumno: result.errores_cometidos_alumno,
                        fecha_creacion: moment(result.fecha_creacion).format('DD/MM/YYYY')
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
// Permite obtener una clase practica por su Id de clase practica
//
exports.clases_practicas_get_by_clasePracticaId = (req, res, next) => {
    const clasePracticaId = req.params.clasePracticaId;
    Clase.findOne({'_id': clasePracticaId})
        .exec()
        .then(doc => {
            if (doc){
                res.status(200).json({
                    status: "ok",
                    code: 200,
                    messages: [],
                    result: {
                        clase_practica: {
                            _id: doc._id,
                            autoescuela_id: doc.autoescuela_id,
                            profesor_id: doc.profesor_id,
                            alumno_id: doc.alumno_id,
                            vehiculo_id: doc.vehiculo_id,                            
                            fecha_clase: moment(doc.fecha_clase, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                            hora_inicio: moment(doc.hora_inicio).format('HH:mm'),
                            hora_finalizacion: moment(doc.hora_finalizacion).format('HH:mm'),
                            descripcion_recorrido: doc.descripcion_recorrido,
                            errores_cometidos_alumno: doc.errores_cometidos_alumno,
                            fecha_creacion: moment(doc.fecha_creacion).format('DD/MM/YYYY'),
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
// Permite actualizar los datos de una clase practica
//
exports.clases_practicas_update = (req, res, next) => {
    const id                    = req.params.clasePracticaId;
    const update                = req.body;
    update.fecha_clase          = moment(update.fecha_clase, 'DD/MM/YYYY').format('YYYY-MM-DD')
    update.hora_inicio          = moment(update.hora_inicio, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm'),
    update.hora_finalizacion    = moment(update.hora_finalizacion, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm'),
    update.fecha_creacion       = moment(update.fecha_creacion, 'DD/MM/YYYY').format('YYYY-MM-DD')

    Clase.updateOne({_id: id}, {$set: update})
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
// Permite eliminar una clase practica por el Id de la clase practica
//
exports.clases_practicas_delete = (req, res, next) => {
    const id = req.params.clasePracticaId;
    Clase.deleteOne({_id: id})
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
                            autoescuela_id: 'String',
                            profesor_id: 'String',
                            alumno_id: 'String',
                            vehiculo_id: 'String',                            
                            fecha_clase: 'Date',
                            hora_inicio: 'Date',
                            hora_finalizacion: 'Date',
                            descripcion_recorrido: 'String',
                            errores_cometidos_alumno: 'String'
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