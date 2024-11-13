const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')
const UseValidation = require('../middleware/UserValidation')

router.get('/', UsersController.UsersList)
router.post('/',UseValidation.UserCreateValidation, UsersController.UsersCreate)

module.exports=router