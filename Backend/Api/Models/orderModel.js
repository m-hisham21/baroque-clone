const mongoose = require('mongoose')
mongoose.pluralize(null)

const orderItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    name: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
}, { _id: false })

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    customerName: { type: String, required: true },
    email: { type: String },

    products: { type: [orderItemSchema], default: [] },

    totalAmount: { type: Number, required: true, default: 0 },

    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed', 'Refunded'],
        default: 'Pending',
    },

    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending',
    },
}, {
    timestamps: true // createdAt used for order date & sales trend aggregations
})

const orderModel = mongoose.model('Orders', orderSchema)
module.exports = orderModel
