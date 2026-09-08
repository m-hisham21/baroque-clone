const mongoose = require('mongoose')
mongoose.pluralize(null)

var categorySchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Description: { type: String },
}, {
    timestamps: true // adds createdAt, needed for "Recently added categories"
})

var categoryModels = mongoose.model('Categories', categorySchema)
module.exports = categoryModels
