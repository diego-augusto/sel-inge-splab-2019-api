const express = require('express')
const testController = require('../controllers/testController')
const router = express.Router()

router.get("/:id", testController.get)
router.get("/", testController.getAll)
router.post("/", testController.add)
router.put("/:id", testController.update)
router.delete("/:id", testController.delete)

module.exports = router