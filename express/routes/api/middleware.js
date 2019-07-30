//otra forma de export
let jwt = require('jwt-simple')
let config = require('../../config')
let moment = require('moment')

// Comprueba si token válidon
exports.checkToken = (req, res, next) => {
    // Ver si me envía cabecera Authorization
    if (!req.headers.authorization) {
        return res.status(403).json({message: 'Falta token'})
    }
    // Ver si token ha expirado
    let token = req.headers.authorization
    let body = jwt.decode(token, config.TOKEN_SECRET)
    console.log(body) // Objecto ya decodificado
    if (body.expires <= moment().unix()) {
        return res.status(401).json({message: 'Unauthorized. Token expirado'})
    }

    // Paso cierta info del token a los siguientes manejadores
    req.user = body.userId

    next()
}