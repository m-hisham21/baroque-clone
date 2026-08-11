const mongoose = require('mongoose')
mongoose.pluralize(null)

var productSchema = new mongoose.Schema({
    Name : { type: String, reduired : true },
    Price : { type: Number, required : true },
    Image : { type: String },
    Description : { type: String },

})

var productModel = mongoose.model('Products', productSchema)
module.exports = productModel
