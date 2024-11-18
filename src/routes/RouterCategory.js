const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/CategoryController')

router.get('/', CategoryController.CategoryList)
router.post('/', CategoryController.CategoryCreate)
router.put('/:id', CategoryController.CategoryUpdate)
router.delete('/:id', CategoryController.CategoryDelete)