var express = require('express');
var router = express.Router();
let Usuario = require('../../models/usuario')

/* http://localhost:3000/api/usuarios/ */
router.get('/', function(req, res) {

    Usuario.find((err, usuarios) => {
        if (err) return res.json({error: err})
        res.json(usuarios) 
    })
});

module.exports = router;