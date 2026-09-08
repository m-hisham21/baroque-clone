const mongoose = require('mongoose')
mongoose.pluralize(null)

const activitySchema = new mongoose.Schema({
    type: {
        type: String,
        enum: [
            'PRODUCT_ADDED',
            'PRODUCT_UPDATED',
            'PRODUCT_DELETED',
            'CATEGORY_ADDED',
            'CATEGORY_UPDATED',
            'CATEGORY_DELETED',
            'USER_REGISTERED',
            'ORDER_CREATED',
            'ORDER_STATUS_CHANGED',
        ],
        required: true,
    },
    message: { type: String, required: true },
    meta: { type: mongoose.Schema.Types.Mixed },
}, {
    timestamps: true
})

const activityModel = mongoose.model('Activities', activitySchema)
module.exports = activityModel

// Small helper so controllers can log activity in one line without
// worrying about try/catch boilerplate everywhere. Logging failures
// should never break the actual CRUD request.
activityModel.log = async function (type, message, meta = {}) {
    try {
        await activityModel.create({ type, message, meta })
    } catch (err) {
        console.error('Activity log failed:', err.message)
    }
}
