const db = require('../models/jobHuntModel');

import  { Request, Response, NextFunction, RequestHandler } from 'express';

const getRecruiter = async (req: Request, res: Response, next: NextFunction) => {

}

const createRecruiter = async (req: Request, res: Response, next: NextFunction) => {
  const {app_id} = res.locals.app;
  const query = `INSERT INTO recruiter (app_id, name, email, phone, linkedin) VALUES (${app_id}, NULL, NULL, NULL, NULL) RETURNING *`
  const newRecruiter = await db.query(query)
  res.locals.recruiter = newRecruiter.rows[0];
  return next();
}

const updateRecruiter = async (req: Request, res: Response, next: NextFunction) => {

}

const deleteRecruiter = async (req: Request, res: Response, next: NextFunction) => {

}

module.exports = {
  getRecruiter,
  createRecruiter,
  updateRecruiter,
  deleteRecruiter
}