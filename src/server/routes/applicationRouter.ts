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
  return res.status(200).json(res.locals.apps);
})

router.post('/', createApplication, (req: Request, res:Response) => {
  return res.status(200).json(res.locals.app);
})

router.get('/:id', getApplication, (req: Request, res:Response) => {

})

router.patch('/', updateApplication, (req: Request, res:Response) => {

})

router.delete('/:id', deleteApplication, (req: Request, res:Response) => {

})

module.exports = router;