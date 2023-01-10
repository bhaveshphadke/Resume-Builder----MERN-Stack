// All imports
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')
const connectToMongo = require('./db')
const error = require('./middlewares/Error')
const cloudinary = require('cloudinary')

// Utils
const app = express()
const PORT = process.env.PORT
connectToMongo()

//Middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
cloudinary.config({
    cloud_name: "dibwpamp7",
    api_key: 576223434431196,
    api_secret: 'dUhRSNdYUPTfj7yagBrK0sEpNAA'
})

// Routes
const authRouter = require(path.join(__dirname, 'routes/auth'))
const resumeRouter = require(path.join(__dirname, 'routes/resume'))

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/resume', resumeRouter)



// Post Middleware
app.use(error)

// App Listening
app.listen(PORT, (err) => {
    if (err) {
        return console.log('Internal Server Error');
    }
    console.log(`app is listening on http://localhost:${PORT}`);

})