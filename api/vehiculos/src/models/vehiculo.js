'use strict'

const mongoose  = require('mongoose')

const VehiculoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    autoescuela_id: mongoose.Schema.Types.ObjectId,
    matricula: {type: String, required: true, maxlength: 10},
    marca: {type: String, maxlength: 150},
    modelo: {type: String, maxlength: 150},
    cilindrada: {type: String, maxlength: 10},
    color: {type: String, maxlength: 25},
    fecha_creacion: {type: Date, required: true, default: Date.now()},
})

module.exports = mongoose.model('Vehiculo', VehiculoSchema)