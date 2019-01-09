const { Softwares, Tests, Results } = require('../database/models');

module.exports = async (req, res, next) => {
    if (req.originalUrl.includes('/softwares')) {
        const software = await Softwares.findOne({ where: { id: req.params.id } })
        if (software) {
            if (software.createdBy === req.user.id) {
                next()
            } else {
                res.status(403).json({ message: "Forbidden" });
            }
        } else {
            res.status(404).send();
        }
    } else if (req.originalUrl.includes('/tests')) {
        const test = await Tests.findOne({ where: { id: req.params.id } })
        if (test) {
            if (test.createdBy === req.user.id) {
                next()
            } else {
                res.status(403).json({ message: "Forbidden" });
            }
        } else {
            res.status(404).send();
        }
    } else if (req.originalUrl.includes('/results')) {
        const result = await Results.findOne({ where: { id: req.params.id } })
        if (result) {
            if (result.createdBy === req.user.id) {
                next()
            } else {
                res.status(403).json({ message: "Forbidden" });
            }
        } else {
            res.status(404).send();
        }
    }
}