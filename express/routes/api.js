var express = require('express');
var router = express.Router();

let apiStudentsRouter = require('./api/students')
let apiUsersRouter = require('./api/users')
let apiIniciativasRouter = require('./api/iniciativas')

router.use('/students', apiStudentsRouter)
router.use('/users', apiUsersRouter)
router.use('/iniciativas', apiIniciativasRouter)

module.exports = router;