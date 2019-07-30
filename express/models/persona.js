let mongoose = require('mongoose')

let Schema = mongoose.Schema

// Tipos en https://mongoosejs.com/docs/schematypes.html
let personaSchema = new Schema({
    nombre: String,
    apellidos: String,
    edad: Number,
    producto: { type: Schema.Types.ObjectId, ref: 'Producto' }
})

personaSchema.virtual('nombre_completo').get(function ()  {
    return this.nombre + " " + this.apellidos;
})

personaSchema.virtual('nombre_completo').set(function (value)  {
    let arr = value.split(' ');
    this.nombre = arr[0]
    this.apellidos = arr[1]
})

// Exportar a aquellos ficheros que hagan uso de este archivo
// OJO RARO: se va a insertar en mongoDB como Personas (plural), no Persona
module.exports = mongoose.model('Persona', personaSchema)