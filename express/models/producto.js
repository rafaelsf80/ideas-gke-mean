let mongoose = require('mongoose')

let Schema = mongoose.Schema

let productoSchema = new Schema({
    titulo: String,
    descripcion: String,
    precio: Number,
    activo: Boolean,
    departamento: String
})

// Producto.activos((err, productos) => {})
// No puedo hacer Producto.find
productoSchema.statics.activos = function(callback) {
    this.model('Producto').find({activo: true }, callback) 
}

// Devuelve todos los objetos que compartan departamentov
// No puedo hacer Producto.find
productoSchema.methods.mismoDepartamento = function(callback) {
    console.log(this.departamento)
    this.model('Producto').find({ departamento: this.departamento }, callback)
}

// Exportar a aquellos ficheros que hagan uso de este archivo
module.exports = mongoose.model('Producto', productoSchema)