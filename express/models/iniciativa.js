let mongoose = require('mongoose')

let Schema = mongoose.Schema

let iniciativaSchema = new Schema({
    fecha: String,
    titulo: String,
    descripcion: String,
    logo: String,
    adjuntos: String,
    estado: String,
    tags: String
})

// Iniciativa.pendientes((err, iniciativas) => {})
// No puedo hacer Iniciativa.find
iniciativaSchema.statics.pendientes = function(callback) {
    this.model('Iniciativa').find({estado: 'pendiente' }, callback) 
}

// Devuelve todos los objetos que compartan estado
// No puedo hacer Iniciativa.find
iniciativaSchema.methods.mismoEstado = function(callback) {
    console.log(this.estado)
    this.model('Iniciativa').find({ estado: this.estado }, callback)
}

// Exportar a aquellos ficheros que hagan uso de este archivo
module.exports = mongoose.model('Iniciativa', iniciativaSchema)