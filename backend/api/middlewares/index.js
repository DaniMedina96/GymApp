const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario.model')

function checkAuth(req, res, next) {
    if (!req.headers.authorization) return res.status(401).send('Token not found')

    jwt.verify(req.headers.authorization, process.env.JWT_SECRET, async (err, result) => {
        if (err) return res.status(401).send('Token not valid')

        const usuario = await Usuario.findOne({ where: { correo: result.correo } })
        if (!usuario) return res.status(401).send('Token not valid')

        res.locals.usuario = usuario
        next()
    })
}

function checkAdmin(req, res, next) {
if(res.locals.usuario.rol !== 1) {
    return res.status(401).send('Unauthorized')
}
next()
}
module.exports = {checkAuth, checkAdmin} ;