'use strict'

const mongoose  = require('mongoose')

const ClasePracticaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    autoescuela_id: {type: mongoose.Schema.Types.ObjectId, required: true},
    profesor_id: {type: mongoose.Schema.Types.ObjectId, required: true},
    alumno_id: {type: mongoose.Schema.Types.ObjectId, required: true},
    vehiculo_id: {type: mongoose.Schema.Types.ObjectId, required: true},
    fecha_clase: {type: Date, required: true},
    hora_inicio: {type: Date, required: true},
    hora_finalizacion: {type: Date, required: true},
    descripcion_recorrido: {type: String, maxlength: 255},
    errores_cometidos_alumno: {type: String, maxlength: 255},
    fecha_creacion: {type: Date, required: true, default: Date.now()},
})

module.exports = mongoose.model('ClasePractica', ClasePracticaSchema)