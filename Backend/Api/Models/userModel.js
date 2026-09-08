const mongoose = require('mongoose')
mongoose.pluralize(null)

const bcrypt = require('bcrypt')
var saltround = 10

var userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otp: {
        type: String
    },

    otpExpires: {
        type: Date
    },

    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
}, {
    timestamps: true // adds createdAt, needed for registration trends
})

// Hash password before saving
userSchema.pre('save', async function () {
    if (!this.isModified('password')) return
    this.password = await bcrypt.hash(this.password, saltround)
})

var userModel = mongoose.model('Users', userSchema)
module.exports = userModel
