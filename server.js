require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');


app.use(helmet());
app.use(cors());

/**
 * @Serve the public folder
 */
app.use(express.static(path.join(__dirname, 'client', 'build')));

/**
 * Parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Parse any data into JSON
 */
app.use(bodyParser.json());

/**
 * Create a connection to the database
 */
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

/**
 * Use the course routes
 */
const coursesRouter = require('./server/routes/courses.route')
app.use('/course', coursesRouter)

/**
 * Setting up the port on the server
 */
app.listen(5000, () => console.log('server started at port 5000'))

/**
 * Serving react calls;
 */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
  