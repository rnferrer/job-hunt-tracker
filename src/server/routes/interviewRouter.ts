import express, { Request, Response, NextFunction, RequestHandler } from 'express';
const router = express.Router();

const {
  getAllInterviews,
  getInterview,
  createInterview,
  updateInterview,
  deleteInterview
} = require('../controllers/interviewController');

router.get('/', getAllInterviews, (req: Request, res:Response) => {

})

router.post('/', createInterview, (req: Request, res:Response) => {

})

router.get('/:id', getInterview, (req: Request, res:Response) => {

})

router.patch('/:id', updateInterview, (req: Request, res:Response) => {

})

router.delete('/:id', deleteInterview, (req: Request, res:Response) => {

})

module.exports = router;