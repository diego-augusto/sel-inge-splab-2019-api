const { People } = require('../database/models');
const jwt = require('jsonwebtoken');

exports.authorize = async function (req, res, next) {

    const token = req.headers.authorization;

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {

        if (err) {
            res.status(500).json({ error: err, message: 'Token Inválido.' })
        } else {
            const user = await People.findByPk(decoded.id);
            if (user) {
                req.user = user
                next();
            } else {
                res.status(400).json(
                    {
                        message: 'Usuário não encontrado para o Token fornecido.'
                    }
                )
            }
        }
    })
}