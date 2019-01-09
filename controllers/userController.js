const { People } = require('../database/models');
const bcrypt = require('bcrypt')

exports.getAll = async function (req, res) {

    try {
        const users = await People.findAll({
            where: req.query,
            attributes: { exclude: ['password'] }
        });
        res.status(200).json({ data: users })
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao recuperar usuários' } })
    }
}

exports.get = async function (req, res) {
    try {
        const user = await People.findOne({
            where: { id: req.params.id },
            attributes: { exclude: ['password'] }
        });

        if (user) {
            res.status(200).json({ data: user })
        } else {
            res.status(400).json({ data: { message: 'Usuário não encontrado' } })
        }

    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao recuperar um usuário' } })
    }
}


exports.add = async function (req, res) {

    try {
        const tempUser = await People.findOne({ where: { $or : {username: req.body.username, email: req.body.email}  } })
        if (tempUser) {
            return res.status(409).json({ data: { message: 'Usuário já existe' } })
        }
        const salt = bcrypt.genSaltSync()
        const hash = bcrypt.hashSync(req.body.password, salt)
        req.body.password = hash
        const user = await People.create(req.body);
        res.status(201).json({ data: { message: "Usuário criado com sucesso com id: " + user.id } });

    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao criar um usuário' } })
    }
}

exports.update = async function (req, res) {

    try {
        const username = await People.findOne({ where: { username: req.body.username } })
        if (username) {
            return res.status(409).json({ data: { message: 'Usuário em uso' } })
        }
        const email = await People.findOne({ where: { email: req.body.email } })

        if (email) {
            return res.status(409).json({ data: { message: 'E-mail em uso' } })
        }

        await People.update(req.body, { where: { id: req.params.id } });

        res.status(200).json({ data: { message: 'Usuário editado com sucesso' } });

    } catch (error) {

    }
}

exports.delete = async function (req, res) {
    try {
        const user = await People.findByPk(req.params.id);
        if (user) {
            await user.destroy()
            res.status(204).send()
        } else {
            res.status(404).json({ data: { message: 'Não foi possível encontrar o usuário' } })
        }
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao remover um usuário' } })
    }
}
