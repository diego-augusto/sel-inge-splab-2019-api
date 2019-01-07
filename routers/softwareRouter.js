const express = require('express')
const softwareController = require('../controllers/softwareController')
const router = express.Router()

router.get("/:id", softwareController.get)
router.get("/", softwareController.getAll)
router.post("/", softwareController.add)
router.put("/:id", softwareController.update)
router.delete("/:id", softwareController.delete)

module.exports = router