const mongoose = require('mongoose')
mongoose.pluralize(null)

var productSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Price: { type: Number, required: true },
    Image: { type: String },
    Description: { type: String },

    // Reference to the category this product belongs to.
    // Kept as Mixed so it accepts either a Categories _id or a plain
    // category name string, matching how the existing filterProducts
    // controller already queries this field.
    Category: { type: mongoose.Schema.Types.Mixed },

    Stock: { type: Number, default: 0 },
    Status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
}, {
    timestamps: true // adds createdAt / updatedAt, needed for "Recently added products"
})

var productModel = mongoose.model('Products', productSchema)
module.exports = productModel
