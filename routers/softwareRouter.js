const express = require('express')
const softwareController = require('../controllers/softwareController')
const testController = require('../controllers/testController')
const router = express.Router()
const permission = require('../middlewares/permission')
const createdBy = require('../middlewares/createdBy')

router.get("/:id", softwareController.get)
router.get("/", softwareController.getAll)
router.post("/", permission.permit('engineer'), softwareController.add)
router.put("/:id", permission.permit('engineer'), createdBy, softwareController.update)
router.delete("/:id", permission.permit('engineer'), createdBy, softwareController.delete)
router.get("/:softwareId/tests", testController.getAllBySoftware)
router.post("/:softwareId/tests", permission.permit('engineer'), permission.permit('engineer'), testController.add)

module.exports = router