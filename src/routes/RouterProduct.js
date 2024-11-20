const express = require('express')
const router = express.Router()
const ProductController=require('../controllers/ProductController')

router.get('/', ProductController.ProductList)
router.get('/:id',ProductController.ProductListId)
router.post('/', ProductController.ProductRegister)
router.put('/:id', ProductController.ProductUpdate)
router.delete('/:id', ProductController.ProductDelete)

module.exports=router
