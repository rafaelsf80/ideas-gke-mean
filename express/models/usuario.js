let mongoose = require('mongoose')

let Schema = mongoose.Schema

let usuarioSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    puntos: Number,
    iniciativa: { type: Schema.Types.ObjectId, ref: 'Iniciativa' }
})

usuarioSchema.virtual('nombre_completo').get(function ()  {
    return this.nombre + " " + this.apellidos;
})

usuarioSchema.virtual('nombre_completo').set(function (value)  {
    let arr = value.split(' ');
    this.nombre = arr[0]
    this.apellidos = arr[1]
})

// Exportar a aquellos ficheros que hagan uso de este archivo
// OJO RARO: se va a insertar en mongoDB como Uusarios (plural), no Usuario
module.exports = mongoose.model('Usuario', usuarioSchema)