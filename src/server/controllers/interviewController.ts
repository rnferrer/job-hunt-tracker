const db = require('../models/jobHuntModel');

import express, { Request, Response, NextFunction, RequestHandler } from 'express';

const getAllInterviews = async (req: Request, res: Response, next: NextFunction) => {
  const { id:user_id } = req.cookies;
  const query = `
  SELECT i.*
  FROM users u
  JOIN applications a ON u.user_id = a.user_id
  JOIN interviews i ON a.app_id = i.app_id
  WHERE u.user_id = ${user_id}
  `;
  const interviews = await db.query(query);
  console.log('interviews', interviews.rows);
  res.locals.applications = interviews.rows;
  return next();
}

const getInterview = async (req: Request, res: Response, next: NextFunction) => {

}

const createInterview = async (req: Request, res: Response, next: NextFunction) => {

}

const updateInterview = async (req: Request, res: Response, next: NextFunction) => {
  const { interview_id, date, time, location } = req.body;
  const query = `
    UPDATE interviews
    SET
    date = '${date}',
    time = '${time}',
    location = '${location}'
    WHERE interview_id = ${interview_id}
  `
  await db.query(query);
  return next();
}

const deleteInterview = async (req: Request, res: Response, next: NextFunction) => {
  const { interview_id } = req.body;
  const query = `DELETE FROM interviews WHERE interview_id = ${interview_id}`
  await db.query(query);
  return next();
}

module.exports = {
  getAllInterviews,
  getInterview,
  createInterview,
  updateInterview,
  deleteInterview
}