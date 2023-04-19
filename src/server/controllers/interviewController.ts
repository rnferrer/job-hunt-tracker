const db = require('../models/jobHuntModel');

import express, { Request, Response, NextFunction, RequestHandler } from 'express';

const getAllInterviews = async (req: Request, res: Response, next: NextFunction) => {
  const { app_id, user_id } = req.body;
  const query = `
  SELECT i.*
  FROM users u
  JOIN applications a ON u.user_id = a.user_id
  JOIN interviews i ON a.app_id = i.app_id
  WHERE u.user_id = ${user_id}
  `;
  let apps = await db.query(query);
  console.log('interviews', apps.rows);
  res.locals.applications = apps.rows;
  return next();
}

const getInterview = async (req: Request, res: Response, next: NextFunction) => {

}

const createInterview = async (req: Request, res: Response, next: NextFunction) => {

}

const updateInterview = async (req: Request, res: Response, next: NextFunction) => {

}

const deleteInterview = async (req: Request, res: Response, next: NextFunction) => {

}

module.exports = {
  getAllInterviews,
  getInterview,
  createInterview,
  updateInterview,
  deleteInterview
}