/**
 * Every controller we have to import one one problem statement,
 * instade if this we can do one things we wii write all the controller inside the index of controller 
 * and export that controler
 */

const express = require('express');


const { problemController } = require('../../controllers/index')//no ned to write index
const problemRouter = express.Router();

//if any request comes and routes starts with /problems, we map it to problemRouter

problemRouter.get('/', problemController.getProblems);

problemRouter.get('/ping', problemController.pingProblemController);


problemRouter.get('/:id', problemController.getProblem);


problemRouter.post('/', problemController.addProblem);


problemRouter.delete('/:id', problemController.deleteProblem);


problemRouter.put('/:id', problemController.updateProblem);


module.exports = problemRouter