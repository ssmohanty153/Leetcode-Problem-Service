// Importing required modules
const { StatusCodes } = require('http-status-codes'); // Importing HTTP status codes
const NotImplemented = require('../errors/notImplemented.error'); // Importing NotImplemented error class

// Controller to check if the service is up
function pingProblemController(req, res) {
    return res.json({
        message: "ping controller is up" // Responds with a message when '/ping' is hit
    })
}

// Controller to add a problem
function addProblem(req, res) {
    try {
        throw new NotImplemented("Added problem") // Throws a NotImplemented error
    } catch (error) {
        next(error) // Passes the error to the next middleware
    }
}

// Controller to get a problem
function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented" // Responds with a NotImplemented message
    })
}

// Controller to get all problems
function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented" // Responds with a NotImplemented message
    })
}

// Controller to delete a problem
function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented" // Responds with a NotImplemented message
    })
}

// Controller to update a problem
function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented" // Responds with a NotImplemented message
    })
}

// Exporting the controllers
module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblemController
}
