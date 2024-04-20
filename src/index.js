// Importing required modules
const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config.js"); // Importing server configuration
const apiRouter = require("./routers/index.js"); // Importing router
const errorHandler = require("./utils/errorHandler.js"); // Importing error handler

// Creating an Express application
const app = express();

// Configuring the app to use bodyParser middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.text()); // for parsing text/plain

// Mapping any request that starts with /api to apiRouter
app.use("/api", apiRouter);

// Adding a simple route for testing server status
app.get('/ping', (req, res) => {
    res.json({
        message: "Problem service alive" // Responds with a message when '/ping' is hit
    })
})

// Using errorHandler as the last middleware if any error comes it will handle
app.use(errorHandler);

// Starting the server and listening on the configured port
app.listen(PORT, () => {
    console.log(`server is listening on port number ${PORT}`) // Logs a message when the server starts successfully
})
