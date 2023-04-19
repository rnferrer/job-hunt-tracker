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

router.get('/', getInterview, (req: Request, res:Response) => {

})

router.patch('/', updateInterview, (req: Request, res:Response) => {
  return res.status(200).send('interview info updated');
})

router.delete('/', deleteInterview, (req: Request, res:Response) => {
  return res.status(200).send('interview deleted')
})

module.exports = router;