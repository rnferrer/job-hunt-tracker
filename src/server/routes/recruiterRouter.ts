import express, { Request, Response, NextFunction, RequestHandler } from 'express';
const router = express.Router();

const {
  getRecruiter,
  createRecruiter,
  updateRecruiter,
  deleteRecruiter
}
 = require('../controllers/recruiterController');

router.post('/',  updateRecruiter, (req: Request, res:Response) => {

})

router.get('/:id', getRecruiter, (req: Request, res:Response) => {

})

router.patch('/:id', (req: Request, res:Response) => {

})

router.delete('/:id', deleteRecruiter, (req: Request, res:Response) => {

})

module.exports = router;