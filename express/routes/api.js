var express = require('express');
var router = express.Router();

let apiIniciativasRouter = require('./api/iniciativas')
let apiUsuariosRouter = require('./api/usuarios')

router.use('/iniciativas', apiIniciativasRouter)
router.use('/usuarios', apiUsuariosRouter)

module.exports = router;