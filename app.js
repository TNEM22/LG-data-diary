// Modules
const express = require('express');
const cookieParser = require('cookie-parser');

// Routers
const studentRouter = require('./routes/studentRoutes');
const localGuardianRouter = require('./routes/localGuardianRoutes');

const app = express();

// MIDDLE WARE
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/localGuardians', localGuardianRouter);

module.exports = app;
