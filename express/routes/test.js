let express = require('express');
let router = express.Router();
let Persona = require('../models/persona')
let Producto = require('../models/producto')

// localhost:3000/test/select 
router.get('/select', function(req, res) {
    Persona.find((err, personas) => {
        if (err) return res.json({ error: err })
        res.json(personas);
  })
  //res.send('Funciona correctamente');
});

// localhost:3000/test/insert 
router.get('/insert', (req, res) => {
    let p = new Persona();
    p.nombre = 'Yolanda';
    p.apellidos = 'Navarro';
    p.edad = 23;
    p.save((err) => {
        if (err) return res.json({error: err})
        res.json({ success: 'Persona insertada' })
    })
})

// localhost:3000/test/insertv2
router.get('/insertv2', (req, res) => {
    // Super cómodo, devuelve la persona si no hay error
    Persona.create({
        nombre: 'Raul', apellidos: 'Perez', edad: 87
    }, (err, persona) => {
        if (err) return res.json({ error: err })
        res.json(persona)
    })  
})

// POST localhost:3000/test/insertv3
// Para poder introducir desde fuera
router.post('/insertv3', (req, res) => {
    // Habría que comprobar formato del POST correcto 
    // res.json(req.body)
    Persona.create(req.body, (err, persona) => {
        if (err) return res.json({ error: err })
        res.json(persona)
    })
})

// localhost:3000/test/virtuales
router.get('/virtuales', (req, res) => {
    // Recupero todos los documentos de la colección Personas
    Persona.find((err, personas) => {
        if (err) return res.send(err);
        // Renderiza la vista
        res.render('listaPersonas', { arrPersonas: personas })
    })
})

// localhost:3000/test/filtros
router.get('/filtros', (req, res) => {
    // Filtro en primer parámetro de find(), > 30 años
    Persona.find({
        // edad: 30 // filtro de 30 años justos
        edad: { $gt: 30, $lt: 70}  // greater than, lower than
    }, (err, personas) => {
        res.render('listaPersonas', { arrPersonas: personas })
    })
})

// localhost:3000/test/update
// recupero un Id que sé que existe
router.get('/update', (req, res) => {
    Persona.findById('5d1722c63ef10ffc75d99941', (err, persona) => {
        persona.edad = 99;
        persona.save((err) =>  {
            if (err) return res.json({ error: err })
            res.send('Persona actualizada')
        })
    })
})

// POST localhost:3000/test/insertv4
router.post('/insertv4', (req, res) => {
    Producto.create(req.body, (err, producto) => {
        if (err) return res.json({ error: err })
        res.json(producto)
    })
})

// localhost:3000/test/productosactivos
router.get('/productosactivos', (req, res) => {
   Producto.activos((err, productos) => {
        if (err) return res.json({ error: err })
        res.json(productos)   
    })
})


router.get('/mismodepartamento', (req, res) => {
    let prod = new Producto()
    prod.departamento = 'Informatica'
    prod.mismoDepartamento((err, productos) => {
        if (err) return res.json({ error: err })
        res.json(productos)
    })
})

// localhost:3000/test/asociacciones
router.get('/asociaciones', (req, res) => {
    Producto.findById('5d1f74a71ffa57279a92ab87', (err, producto) => {
        let p = new Persona()
        p.nombre = 'Ana'
        p.apellidos = 'Lopez'
        p.edad = 39
        p.producto = producto
        p.save((err) => {
            if (err) return res.json(err)
            res.json(p)
        })
    })
})

module.exports = router;