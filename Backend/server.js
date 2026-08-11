const express = require('express')
const cors = require('cors')
const app = express()
require('./Database/connection')

//Cors
app.use(cors())

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Product Routes
var productRoute = require('./Routes/productRoutes')
app.use('/api/products', productRoute)

var categoryRoute = require('./Routes/categoryRoutes')
app.use('/api/categories', categoryRoute)

// Register
var userRoute = require('./Routes/userRoutes')
app.use('/api/user', userRoute)

// Secret Key
    app.set("secretKey", "i am good..??-683289487423092358 djsdjhfjdsncxnxcklWEJDN MJZSHDJandszx vnisfrjwekd")

// Welcome
app.get('/welcome to backend', (req, res) => {
    res.send("Welcome to first Web API's")
})

app.post('/welcome', (req, res) => {
    res.send("Welcome to WEB API's")
})

//server
app.listen(5555,()=> {
    console.log("Your server is running on port #5555")
})