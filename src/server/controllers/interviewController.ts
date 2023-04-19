const db = require('../models/jobHuntModel');

import express, { Request, Response, NextFunction, RequestHandler } from 'express';

const getAllInterviews = async (req: Request, res: Response, next: NextFunction) => {
  const { app_id, user_id } = req.body;
  const query = `
  SELECT i.*
  FROM interviews i
  JOIN applications a ON i.app_id = a.app_id
  JOIN users u ON a.user_id = u.user_id;
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