const { Tests } = require('../database/models');

exports.getAll = async function (req, res) {
    try {
        const testes = await Tests.findAll({ where: req.query });
        res.status(200).json({ data: testes })
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: { message: 'Erro inesperado ao recuperar testes' } })
    }
}

exports.get = async function (req, res) {
    try {
        const test = await Tests.findOne({ where: { id: req.params.id } });
        if (test) {
            res.status(200).json({ data: test })
        } else {
            res.status(400).json({ data: { message: 'Teste não encontrado' } })
        }
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao recuperar um teste' } })
    }
}

exports.add = async function (req, res) {
    try {
        const test = await Tests.create(req.body);
        res.status(201).json({ data: { message: "Software criado com sucesso com id: " + test.id } });
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao criar um teste' } })
    }
}

exports.update = async function (req, res) {
    try {
        await Tests.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ data: { message: 'Teste editado com sucesso' } });
    } catch (error) {

        console.log(error)

        res.status(500).json({ data: { message: 'Erro inesperado ao editar um teste' } })
    }
}

exports.delete = async function (req, res) {
    try {
        const test = await Tests.findByPk(req.params.id);
        if (test) {
            await test.destroy()
            res.status(204).send()
        } else {
            res.status(404).json({ data: { message: 'Não foi possível encontrar o teste' } })
        }
    } catch (error) {
        res.status(500).json({ data: { message: 'Erro inesperado ao remover um teste' } })
    }
}