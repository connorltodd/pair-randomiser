require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Connection to the Database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

// Convert all requests to JSON
app.use(express.json())

const coursesRouter = require('./routes/courses.route')
app.use('/course', coursesRouter)

app.listen(5000, () => console.log('server started at port 5000'))