const { Softwares } = require('../database/models');

exports.getAll = async function (req, res) {
    try {
        const softwares = await Softwares.findAll({ where: req.query })
        res.status(200).json({ data: softwares })
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao recuperar softwares' } })
    }
}

exports.get = async function (req, res) {
    try {
        const software = await Softwares.findOne({ where: { id: req.params.id } })
        if (software) {
            res.status(200).json({ data: software })
        } else {
            res.status(400).json({ data: { message: 'Software não encontrado' } })
        }
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao recuperar um software' } })
    }
}

exports.add = async function (req, res) {
    try {
        req.body.createdBy = req.user.id
        const software = await Softwares.create(req.body);
        res.status(201).json({ data: { message: "Software criado com sucesso com id: " + software.id } })
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao criar um software' } })
    }
}

exports.update = async function (req, res) {
    try {
        await Softwares.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ data: { message: 'Software editado com sucesso' } })
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao editar um software' } })
    }
}

exports.delete = async function (req, res) {
    try {
        await Softwares.update({ deletedAt: new Date() }, { where: { id: req.params.id } })
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao remover um software' } })
    }
}
