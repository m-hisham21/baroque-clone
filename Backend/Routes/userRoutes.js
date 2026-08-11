const userController = require('../Api/Controller/userController')
const express = require('express')
const route = express.Router()

route.post('/register', userController.register)
route.post('/login', userController.authenticate)

module.exports = route
