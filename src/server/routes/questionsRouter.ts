import express, { Request, Response, NextFunction, RequestHandler } from 'express';
const router = express.Router();

const {
  getAllQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion
} = require('../controllers/questionsController');

router.get('/', getAllQuestions, (req: Request, res:Response) => {

})

router.post('/', createQuestion, (req: Request, res:Response) => {

})

router.get('/:id', getQuestion, (req: Request, res:Response) => {

})

router.patch('/:id', updateQuestion, (req: Request, res:Response) => {

})

router.delete('/:id', deleteQuestion, (req: Request, res:Response) => {

})

module.exports = router;