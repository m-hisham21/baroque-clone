const mongoose = require('mongoose')
mongoose.pluralize(null)

var categorySchema = new mongoose.Schema({
    Name : { type: String, reduired : true }
})

var categoryModels = mongoose.model('Categories', categorySchema)
module.exports = categoryModels
