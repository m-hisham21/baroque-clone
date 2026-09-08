const userController = require('../Api/Controller/userController')
const express = require('express')
const route = express.Router()

route.post('/register', userController.register)
route.post('/login', userController.authenticate)

// Admin dashboard - user management
route.get('/', userController.getUsers)
route.get('/:id', userController.getSingleUser)
route.put('/:id', userController.updateUser)

module.exports = route
