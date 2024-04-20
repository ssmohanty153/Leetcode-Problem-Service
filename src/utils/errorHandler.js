// Importing required modules
const BaseError = require("../errors/base.error"); // Importing BaseError class
const { StatusCodes } = require("http-status-codes"); // Importing HTTP status codes

// Defining the error handler function
/**
 * This is a standard signature for an error-handling middleware in Express.js.
 *  When an error is passed using next(), 
 * Express will skip all remaining non-error handling routing and middleware 
 * functions and invoke the next error-handling middleware.
 * This is why the errorHandler function needs these four arguments. 
 * It’s designed to handle errors that occur in the application. 
 * It’s a way of centralizing error handling in your Express application.
 */
function errorHandler(error, req, res, next) {
    // Checking if the incoming error is a user-defined error (an instance of BaseError)
    if (error instanceof BaseError) {
        // If it is, we return a response with the error's status code, message, and details
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            error: error.details,
            data: {} // No data is provided because this is an exception
        })
    }
    // If the error is not a user-defined error, we return a response with a 500 Internal Server Error status code
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Somethings went wrong",
        error: error,
        data: {} // No data is provided because this is an exception
    })
}

// Exporting the error handler function
module.exports = errorHandler
