var express = require('express');
var router = express.Router();
let bcrypt = require('bcrypt')
let jwt = require('jwt-simple')
let moment = require('moment')
let config = require('../../config')
let User = require('../../models/user')


/* POST localhost:3000/api/users/signup */
/* Body: username=moderator&password=1234 */
// La misma password generará dos hash distintas
router.post('/signup', function(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    User.create(req.body, (err, user) => {
        if (err) return res.json(err)
        res.json(user)
    })
});

/* POST localhost:3000/api/users/login */
/* Body: username=admin&password=1234 */
router.post('/login', function(req, res) {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err || !user) {
            return res.json({ error: 'Usuario y/ó contraseñas erróneos' })
        } else {
            let eq = bcrypt.compareSync(req.body.password, user.password)
            if (eq == true)
                res.json({ token: creaToken(user) })
            else             
                res.json({ error: 'Usuario y/ó contraseñas erróneos' })
        }
    })
});

let creaToken = (user) => {
    let body = {
        userId: user._id,
        create: moment().unix(),
        expires: moment().add(10, "minutes").unix()
    }
    return jwt.encode(body, config.TOKEN_SECRET)
}

module.exports = router;