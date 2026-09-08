const categoryModel = require('../Models/categoryModels');
const activityModel = require('../Models/activityModel');

module.exports = {

// POST
    createData: function (req, res) {
        categoryModel.create(req.body)
            .then((category) => {
                activityModel.log('CATEGORY_ADDED', `New category added: ${category.Name}`, { categoryId: category._id })
                res.send("Your data is saved into database")
            })
            .catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    },

// GET all Categories
    getCategories: function (req, res) {
        categoryModel.find()
            .sort({ createdAt: -1 })
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
                if (result) {
                    activityModel.log('CATEGORY_UPDATED', `Category updated: ${result.Name}`, { categoryId: result._id })
                }
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
                if (result) {
                    activityModel.log('CATEGORY_DELETED', `Category deleted: ${result.Name}`, { categoryId: result._id })
                }
                res.send("Your category deleted successfully")
            })
            .catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    }

};
