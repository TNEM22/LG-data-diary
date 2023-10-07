// Modules
const express = require('express');
// const routes = require('./routes/route');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Routers
const studentRouter = require('./routes/studentRoutes');

const app = express();

// middlewares that are used
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// MIDDLE WARE
app.use(express.json());
app.use(cookieParser());

// Routes
// app.use('/api/v1/auth', routes);
app.use('/api/v1/student', studentRouter);

module.exports = app;
