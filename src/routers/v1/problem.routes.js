/**
 * Every controller we have to import one one problem statement,
 * instade if this we can do one things we wii write all the controller inside the index of controller 
 * and export that controler
 */

const express = require('express');


const { ProblemController } = require('../../controllers/index')//no ned to write index
const problemRouter = express.Router();


problemRouter.get('/', ProblemController.getProblems);

problemRouter.get('/ping', ProblemController.pingProblemController);


problemRouter.get('/:id', ProblemController.getProblem);


problemRouter.post('/', ProblemController.addProblem);


problemRouter.delete('/:id', ProblemController.deleteProblem);


problemRouter.put('/:id', ProblemController.updateProblem);


module.exports = problemRouter