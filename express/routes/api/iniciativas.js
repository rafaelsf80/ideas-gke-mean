var express = require('express');
var router = express.Router();
let Iniciativa = require('../../models/iniciativa')
// Solo me traigo los objetos que necesito
let {check, validationResult} = require('express-validator')

/* http://localhost:3000/api/iniciativas/ */
router.get('/', function(req, res) {

    Iniciativa.find((err, iniciativas) => {
        if (err) return res.json({error: err})
        res.json(iniciativas) 
    })
});
/* POST localhost:3000/api/iniciativas/ */
// el router.post necesita la ruta y devuelve una funcion anonima
// el Iniciativa.create necesita dos parametros: los datos de la iniciativa, y el callback (funcion anonima) con el error y la iniciativa creado
router.post('/', function(req, res) {

    Iniciativa.create(req.body, (err, iniciativa) => {
        if (err) return res.json({ error: err })
        res.json(iniciativa)
    })
});

/* PUT localhost:3000/api/iniciativas/ */
router.put('/', function(req, res) {
    // Específico de findByIdAndUpdate de Mongoose: el objeto {new: true} es para que te devuelva el nuevo
    console.log(req.body.iniciativaId)
    console.log(req.body)
    Iniciativa.findByIdAndUpdate(req.body.iniciativaId, req.body, { new: true }, (err, iniciativa) => {
        if (err) return res.json({ error: err })
        res.json(iniciativa)
        console.log(iniciativa)
    })
});

/* DELETE localhost:3000/api/iniciativas/ */
router.delete('/', function(req, res) {
    Iniciativa.findByIdAndDelete(req.body.iniciativaId, (err, iniciativa) => {
        if (err) return res.json( err )
        res.json(iniciativa)   
     })
});

// NUEVO 
/* GET localhost:3000/api/iniciativas/ */
router.get('/:iniciativaId', (req, res) => {
    Iniciativa.findById(req.params.iniciativaId, (err, iniciativa) => {
        if (err) return res.json({error: err})
        res.json(iniciativa)
    })
})

module.exports = router;