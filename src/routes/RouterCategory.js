const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/CategoryController')
const categoryValidation = require('../middleware/CategoryValidation')

router.get('/', categoryController.CategoryList)
router.get('/:id',categoryController.CategoryListId)
router.post('/', categoryValidation.CategoryCreateValidation ,categoryController.CategoryCreate)
router.put('/:id', categoryController.CategoryUpdate)
router.delete('/:id', categoryController.CategoryDelete)

module.exports = router