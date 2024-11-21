const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')
const UserValidation = require('../middleware/UserValidation')

router.get('/', UsersController.UsersList)
router.get('/:id',UsersController.UsersListId)
router.post('/',UserValidation.UserCreateValidation, UsersController.UsersCreate)
router.put('/:id', UsersController.UserUpdate)
router.delete('/:id', UsersController.UserDelete)

module.exports=router