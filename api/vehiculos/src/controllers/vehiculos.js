'use strict'

const mongoose = require('mongoose');

const Vehiculo = require('../models/vehiculo');

const moment = require('moment');

//
// Permite obtener todas los vehículos
//
exports.vehiculos_get_all =  (req, res, next) => {
    Vehiculo.find()
        .exec()
        .then(docs => {
            res.status(200).json({
                status: 'ok',
                code: 200,
                messages: [],
                result: {
                    total: docs.length,
                    vehiculos: docs.map(doc => {
                        return {
                            _id: doc._id,
                            autoescuela_id: doc.autoescuela_id,
                            matricula: doc.matricula,
                            marca: doc.marca,
                            modelo: doc.modelo,
                            cilindrada: doc.cilindrada,
                            color: doc.color,
                            fecha_creacion: moment(doc.fecha_creacion, 'YYYY-MM-DD').format('DD/MM/YYYY'),
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
// Permite obtener todas los vehículos de una autoescuela
//
exports.vehiculos_get_all_by_autoescuelaId =  (req, res, next) => {
    const autoescuelaId = req.params.autoescuelaId;
    Vehiculo.find({autoescuela_id: autoescuelaId})
        .exec()
        .then(docs => {
            res.status(200).json({
                status: 'ok',
                code: 200,
                messages: [],
                result: {
                    total: docs.length,
                    vehiculos: docs.map(doc => {
                        return {
                            _id: doc._id,
                            autoescuela_id: doc.autoescuela_id,
                            matricula: doc.matricula,
                            marca: doc.marca,
                            modelo: doc.modelo,
                            cilindrada: doc.cilindrada,
                            color: doc.color,
                            fecha_creacion: moment(doc.fecha_creacion, 'YYYY-MM-DD').format('DD/MM/YYYY'),
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
// Permite crear una Vehiculo asociandola al Id de la Autoescuela
//
exports.vehiculos_create = (req, res, next) => {
    const vehiculo = new Vehiculo({
        _id: new mongoose.Types.ObjectId(),
        autoescuela_id: req.body.autoescuela_id,
        matricula: req.body.matricula,
        marca: req.body.marca,
        modelo: req.body.modelo,
        cilindrada: req.body.cilindrada,
        color: req.body.color,
    });
    vehiculo.save()
        .then(result => {
            res.status(201).json({
                status: 'created',
                code: 201,
                messages: [],
                result: {
                    mensaje: 'Registro creado correctamente',
                    vehiculo: {
                        _id: result._id,
                        autoescuela_id: result.autoescuela_id,
                        matricula: result.matricula,
                        marca: result.marca,
                        modelo: result.modelo,
                        cilindrada: result.cilindrada,
                        color: result.color,
                        fecha_creacion: moment(result.fecha_creacion, 'YYYY-MM-DD').format('DD/MM/YYYY')
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
// Permite obtener un vehículo por su Id de vehiculo
//
exports.vehiculos_get_by_vehiculoId = (req, res, next) => {
    const vehiculoId = req.params.vehiculoId;
    Vehiculo.findOne({'_id': vehiculoId})
        .exec()
        .then(doc => {
            if (doc){
                res.status(200).json({
                    status: "ok",
                    code: 200,
                    messages: [],
                    result: {
                        vehiculo: {
                            _id: doc._id,
                            autoescuela_id: doc.autoescuela_id,
                            matricula: doc.matricula,
                            marca: doc.marca,
                            modelo: doc.modelo,
                            cilindrada: doc.cilindrada,
                            color: doc.color,
                            fecha_creacion: moment(doc.fecha_creacion, 'YYYY-MM-DD').format('DD/MM/YYYY'),
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
// Permite actualizar los datos del vehículo
//
exports.vehiculos_update = (req, res, next) => {
    const id = req.params.vehiculoId;
    const update = req.body;
    update.fecha_creacion = moment(update.fecha_creacion, 'DD/MM/YYYY').format('YYYY-MM-DD')

    Vehiculo.updateOne({_id: id}, {$set: update})
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
// Permite eliminar un Vehiculo por el Id del vehículo
//
exports.vehiculos_delete = (req, res, next) => {
    const id = req.params.vehiculoId;
    Vehiculo.deleteOne({_id: id})
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
                            matricula: 'String',
                            marca: 'String',
                            modelo: 'String',
                            cilindrada: 'String',
                            color: 'String',
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