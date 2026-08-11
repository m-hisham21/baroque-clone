const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'YOUR_GMAIL@gmail.com',
        pass: 'YOUR_GMAIL_APP_PASSWORD'
    }
});

module.exports = {

    register: function (req, res) {
        userModel.create(req.body)
            .then(() => {
                res.send("Your data is saved into database")
            })
            .catch(err => {
                res.status(500).send("Oops! Something went wrong: " + err)
            })
    },

    authenticate: function (req, res) {
        userModel.findOne({ email: req.body.email })
            .then(user => {
                // User not found
                if (!user) {
                    return res.status(404).json({
                        status: "error",
                        message: "User not found"
                    })
                }
                // Check password
                if (!bcrypt.compareSync(req.body.password, user.password)) {
                    return res.status(401).json({
                        status: "error",
                        message: "Wrong password"
                    })
                }
                // Create token
                const token = jwt.sign(
                    { id: user._id },
                    req.app.get("secretKey"),
                    { expiresIn: "1h" }
                )
                // Login successful
                res.status(200).json({
                    status: "success",
                    message: "Login successful",
                    token: token
                })

            })
            .catch(err => {
                res.status(500).json({
                    status: "error",
                    message: "Something went wrong",
                    error: err.message
                })
            })
    },

};