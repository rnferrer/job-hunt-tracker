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

router.get('/', getQuestion, (req: Request, res:Response) => {

})

router.patch('/', updateQuestion, (req: Request, res:Response) => {

})

router.delete('/', deleteQuestion, (req: Request, res:Response) => {

})

module.exports = router;