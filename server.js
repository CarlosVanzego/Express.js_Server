// Importing Express framework
const express = require('express');
// Creating an instance of Express application
const app = express();

// Serving static files from the "public" directory
app.use(express.static("public"));
// Parsing incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));
// Parsing incoming requests with JSON payloads
app.use(express.json());

// Importing custom middleware for logging
const logger = require('./middleware/log.js');

// Setting the view engine to EJS
app.set('view engine', 'ejs');

// Importing user routes
const userRouter = require('./routes/users');

// Mounting user routes to the "/users" endpoint
app.use('/users', userRouter);

// Starting the Express server on port 3000
app.listen(3000);
