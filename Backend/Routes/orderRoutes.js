const orderController = require('../Api/Controller/orderController')
const express = require('express')
const route = express.Router()

route.post('/', orderController.createOrder)
route.get('/', orderController.getOrders)
route.get('/:id', orderController.getSingleOrder)
route.put('/:id/status', orderController.updateOrderStatus)
route.delete('/:id', orderController.deleteOrder)

module.exports = route
