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
    }
})

// Hash password before saving
userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, saltround)
})

var userModel = mongoose.model('Users', userSchema)
module.exports = userModel
