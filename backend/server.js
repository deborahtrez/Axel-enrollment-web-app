const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const courseapi = require('./api/courseapi')

dotenv.config()

mongoose.connect( process.env.DB_URI, { useUnifiedTopology: true }, ()=> console.log('Database is connected!'))

app.use(cors())
app.use(express.json())
app.use('/courses', courseapi)


app.listen(8000, ()=> {
    console.log('Server is running!')
})