var express = require('express');
var router = express.Router();
let Student = require('../models/student')

/* localhost:3000/students/ */
router.get('/', function(req, res) {
    Student.find((err, students) => {
        res.render('students/list', {estudiantes: students})
    })
});

/* localhost:3000/students/new */
/* Maneja la petición que nos devuelve el formulario para la creación de estudiantes */
router.get('/new', function(req, res) {
   res.render('students/form')
});

/* localhost:3000/students/edit/5d1f7c9e66b5814c315b07c2 */
// Muestra el formulario de edición para un estudiante en concreto
router.get('/edit/:studentId', function (req, res)  {
    Student.findById(req.params.studentId, (err, student) => {
        res.render('students/edit', {estudiante: student})
    })
});

/* localhost:3000/students/delete/5d1f7c9e66b5814c315b07c2 */
router.get('/delete/:studentId', function (req, res)  {
    Student.findByIdAndDelete(req.params.studentId, (err, result) => {
        res.redirect('/students')
    })
});

/* localhost:3000/students/5d1f7c9e66b5814c315b07c2 */
router.get('/:studentId', function(req, res) {
    console.log(req.params);
    // el findbyId recibe como segundo parametro una funcion con el error o el estudiante
    // tendre que renderizar una vista con los datos. Los datos se los paso a la vista de esa forma.
    Student.findById(req.params.studentId, (err, student) => {
        res.render('students/show', {estudiante: student})
    })
});

/* localhost:3000/students/create */
/* Ruta para recibir los valores del formulario */
// TODO: validación de datos previos a la inserción
router.post('/create', function(req, res) {
    req.body.activo = true;
    console.log(req.body);
    Student.create(req.body, (err, student) => {
        if (err) return res.json({ error: err })
        res.redirect('/students')
    })
});

/* localhost:3000/students/update */
// TODO: validación de datos previos a la inserción
router.post('/update', (req, res) => {
    console.log(req.body);
    // cambio el on/off que es un string
    req.body.activo = (req.body.activo == "on") ? true : false;
    Student.findByIdAndUpdate(req.body.studentId, req.body, (err, student) => {
        console.log(student);
        res.redirect('/students/'+student._id)
    })
})

module.exports = router;