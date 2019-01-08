const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()
const permission = require('../middlewares/permission')

router.get("/:id", userController.get)
router.get("/", permission.permit('engineer'), userController.getAll)
router.put("/:id", userController.update)
router.delete("/:id", userController.delete)

module.exports = router