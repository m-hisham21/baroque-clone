const productModel = require('../Models/productModels');
const activityModel = require('../Models/activityModel');

module.exports = {

    // POST
    createData: function (req, res) {
        productModel.create(req.body)
            .then((product) => {
                activityModel.log('PRODUCT_ADDED', `New product added: ${product.Name}`, { productId: product._id })
                res.send("Your data is saved into database")
            })
            .catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    },

    // GET all products
    getProducts: function (req, res) {
        productModel.find()
            .sort({ createdAt: -1 })
            .then(results => {
                res.send(results)
            }).catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    },

    // GET one product
    getSingleProduct: function (req, res) {
        productModel.findById(req.params.id)
            .then(result => {
                res.send(result)
            }).catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    },

    // PUT
    updateProduct: function (req, res) {
        productModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(result => {
                if (result) {
                    activityModel.log('PRODUCT_UPDATED', `Product updated: ${result.Name}`, { productId: result._id })
                }
                res.send("Your data is updated successfully")
            })
            .catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    },

    // DELETE
    deleteProduct: function (req, res) {
        productModel.findByIdAndDelete(req.params.id)
            .then(result => {
                if (result) {
                    activityModel.log('PRODUCT_DELETED', `Product deleted: ${result.Name}`, { productId: result._id })
                }
                res.send("Your product deleted successfully")
            })
            .catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    },
    // SEARCH PRODUCTS
    searchProducts: function (req, res) {
        productModel.find({
            Name: { $regex: req.params.name, $options: 'i' }
        })
            .then(results => {
                res.send(results)
            })
            .catch(err => {
                res.send(500).send("Oops! Something went wrong " + err)
            })
    },

    // Filter Products
    filterProducts: function (req, res) {
        productModel.find({
            Category: req.params.category
        })
            .then(results => {
                res.send(results)
            })
            .catch(err => {
                res.status(500).send("Oops! Something went wrong " + err)
            })
    },

};
