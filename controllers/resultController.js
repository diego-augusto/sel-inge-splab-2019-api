const { Results } = require('../database/models');

exports.getAll = async function (req, res) {
    try {
        const results = await Results.findAll({ where: req.query });
        res.status(200).json({ data: results })
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: { message: 'Erro inesperado ao recuperar os resultados' } })
    }
}

exports.getAllByTests = async function (req, res) {
    try {
        const results = await Results.findAll({ where: { testId: req.params.testId } });
        res.status(200).json({ data: results })
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao recuperar os resultados' } })
    }
}

exports.get = async function (req, res) {
    try {
        const result = await Results.findOne({ where: { id: req.params.id } });
        if (result) {
            res.status(200).json({ data: result })
        } else {
            res.status(400).json({ data: { message: 'Resultado não encontrado' } })
        }
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao recuperar um resultado' } })
    }
}

exports.add = async function (req, res) {
    try {
        req.body.createdBy = req.user.id
        req.body.testId = req.params.testId
        const result = await Results.create(req.body);
        res.status(201).json({ data: { message: "Resultado criado com sucesso com id: " + result.id } });
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao criar um resultado' } })
    }
}

exports.update = async function (req, res) {
    try {
        await Results.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ data: { message: 'Resultado editado com sucesso' } });
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao editar um resultado' } })
    }
}

exports.delete = async function (req, res) {
    try {
        await Results.update({ deletedAt: new Date() }, { where: { id: req.params.id } });
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao remover um resultado' } })
    }
}