const express = require('express')
const testController = require('../controllers/testController')
const resultController = require('../controllers/resultController')
const router = express.Router()
const permission = require('../middlewares/permission')
const createdBy = require('../middlewares/createdBy')

router.get("/", permission.permit('engineer'), testController.getAll)
router.get("/:id", testController.get)
router.put("/:id", permission.permit('engineer'), createdBy, testController.update)
router.delete("/:id", permission.permit('engineer'), createdBy, testController.delete)
router.post("/:testId/results", resultController.add)
router.get("/:testId/results", resultController.getAllByTests)

module.exports = router