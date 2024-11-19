const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/CategoryController')

router.get('/', categoryController.CategoryList)
router.get('/:id',categoryController.CategoryListId)
router.post('/', categoryController.CategoryCreate)
router.put('/:id', categoryController.CategoryUpdate)
router.delete('/:id', categoryController.CategoryDelete)

module.exports = router