const categoryModel = require('../Models/categoryModels');

module.exports = {

// POST
    createData: function (req, res) {
        categoryModel.create(req.body)
            .then(() => {
                res.send("Your data is saved into database")
            })
            .catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    },

// GET all Categories
    getCategories: function (req, res) {
        categoryModel.find()
            .then(results => {
                res.send(results)
            }).catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    },

// GET one Category
    getSingleCategory: function (req, res) {
        categoryModel.findById(req.params.id)
            .then(result => {
                res.send(result)
            }).catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    },

// PUT
    updateCategory: function (req, res) {
        categoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(result => {
                res.send("Your data is updated successfully")
            })
            .catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    },

// DELETE
    deleteCategory: function (req, res) {
        categoryModel.findByIdAndDelete(req.params.id)
            .then(result => {
                res.send("Your category deleted successfully")
            })
            .catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    }

};