
const express = require('express');


const problemRouter = require('./problem.routes.js')//no ned to write index


const v1Router = express.Router();

//if any request comes and routes starts with /problems, we map it to problemRouter

v1Router.use('/problems', problemRouter);


module.exports = v1Router