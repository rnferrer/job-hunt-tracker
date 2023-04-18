import express, { Request, Response, NextFunction, RequestHandler } from 'express';
const router = express.Router();

const {
  getAllApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication
} = require('../controllers/applicationController');

router.get('/', getAllApplications, (req: Request, res:Response) => {

})

router.post('/', createApplication, (req: Request, res:Response) => {

})

router.get('/:id', getApplication, (req: Request, res:Response) => {

})

router.patch('/:id', updateApplication, (req: Request, res:Response) => {

})

router.delete('/:id', deleteApplication, (req: Request, res:Response) => {

})

module.exports = router;