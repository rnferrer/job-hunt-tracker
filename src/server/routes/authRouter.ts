import express, { Request, Response, NextFunction, RequestHandler } from 'express';
const router = express.Router();

const { register, login } = require('../controllers/authController');

router.post('/register', register, (req, res) => {
  return res.status(200).json(res.locals.newUser);
});

router.post('/login', login, (req, res) => {
  
});

module.exports = router;