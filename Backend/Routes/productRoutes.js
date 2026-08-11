const productController = require('../Api/Controller/productController')
const express = require('express')
const route = express.Router()

route.post('/', productController.createData)
route.get('/', productController.getProducts)
route.get('/:id', productController.getSingleProduct)
route.put('/:id', productController.updateProduct)
route.delete('/:id', productController.deleteProduct)

route.get('/search/:name', productController.searchProducts)
route.get('/filter/:category', productController.filterProducts)

module.exports = route
