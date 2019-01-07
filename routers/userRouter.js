const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get("/:id", userController.get)
router.get("/", userController.getAll)
router.post("/", userController.add)
router.put("/:id", userController.update)
router.delete("/:id", userController.delete)

module.exports = router