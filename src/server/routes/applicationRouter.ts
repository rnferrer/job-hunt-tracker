import express, { Request, Response, NextFunction, RequestHandler } from 'express';
const router = express.Router();

const {
  getAllApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication
} = require('../controllers/applicationController');

const {createRecruiter} = require('../controllers/recruiterController');

router.get('/', getAllApplications, (req: Request, res:Response) => {
  return res.status(200).json(res.locals.applications);
})

router.post('/', createApplication, createRecruiter, (req: Request, res:Response) => {
  return res.status(200).json({app: res.locals.app, recruiter: res.locals.recruiter});
})

router.patch('/', updateApplication, (req: Request, res:Response) => {

})

router.delete('/:id', deleteApplication, (req: Request, res:Response) => {

})

module.exports = router;