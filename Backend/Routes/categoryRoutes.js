const categoryController = require('../Api/Controller/categoryController');
const express = require('express');
const route = express.Router();

route.post('/', categoryController.createData);
route.get('/', categoryController.getCategories);
route.get('//:id', categoryController.getSingleCategory);
route.put('//:id', categoryController.updateCategory);
route.delete('//:id', categoryController.deleteCategory);

module.exports = route;
