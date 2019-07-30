var express = require('express');
var router = express.Router();
let Student = require('../../models/student')
// Solo me traigo los objetos que necesito
let {check, validationResult} = require('express-validator')
let middleware = require('./middleware')

/* http://localhost:3000/api/students/ */
//router.get('/', middleware.checkToken, function(req, res) {
router.get('/', function(req, res) {

    console.log(req.user)  // recupero lo que me viene del token (ver middleware.js)
    Student.find((err, students) => {
        if (err) return res.json({error: err})
        res.json(students) // OK: res.json({estudiantes: students}), o podría capar la respuesta
    })
});

/* POST localhost:3000/api/students/ */
// el router.post necesita la ruta y devuelve una funcion anonima
// el Student.create necesita dos parametros: los datos del estudiante, y el callback (funcion anonima) con el error y el estudiante creado
router.post('/', [
    check('nombre', 'el campo nombre os obligatorio').exists(),
    check('apellidos', 'el campo apellido os obligatorio').exists(),
    check('edad', 'el campo edad debe ser mayor de 18').custom((mivalor)=> {
        return mivalor >= 18
    }),
    //check('dni', "dni no válido").isIdentityCard("ES")
    check('dni', "dni no válido").custom((mivalor) => {
        return (/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i).test(mivalor)
    })
], function(req, res) {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array())
    }
    Student.create(req.body, (err, student) => {
        if (err) return res.json({ error: err })
        res.json(student)
    })
});

/* PUT localhost:3000/api/students/ */
router.put('/', function(req, res) {
    // Específico de findByIdAndUpdate de Mongoose: el objeto {new: true} es para que te devuelva el nuevo
    Student.findByIdAndUpdate(req.body.studentId, req.body, { new: true }, (err, student) => {
        if (err) return res.json({ error: err })
        res.json(student)
    })
});

/* DELETE localhost:3000/api/students/ */
router.delete('/', function(req, res) {
    Student.findByIdAndDelete(req.body.studentId, (err, student) => {
        if (err) return res.json( err )
        res.json(student)   
     })
});

// NUEVO PARA AppEscuela EXCLUSIVAMENTE
/* GET localhost:3000/api/students/ */
router.get('/:studentId', (req, res) => {
    Student.findById(req.params.studentId, (err, student) => {
        if (err) return res.json({error: err})
        res.json(student)
    })
})

module.exports = router;