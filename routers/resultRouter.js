const express = require('express')
const resultController = require('../controllers/resultController')
const router = express.Router()
const createdBy = require('../middlewares/createdBy')

router.get("/:id", resultController.get)
router.get("/", resultController.getAll)
router.put("/:id", createdBy, resultController.update)
router.delete("/:id", createdBy, resultController.delete)

module.exports = router