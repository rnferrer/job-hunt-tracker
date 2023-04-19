import express, { Request, Response, NextFunction, RequestHandler } from 'express';
const db = require('../models/jobHuntModel');


const getAllApplications = async (req: Request, res: Response, next: NextFunction) => {
  const { id: user_id } = req.cookies
  const query = `SELECT * FROM applications WHERE user_id = ${user_id}`;
  let apps = await db.query(query);
  res.locals.applications = apps.rows;
  return next();
}

const getApplication = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id, app_id } = req.body;
  const query = `SELECT * FROM applications WHERE user_id = ${user_id} AND app_id = ${app_id}`;
  const app = await db.query(query);
  res.locals.app = app.rows[0];
  return next();
}

const createApplication = async (req: Request, res: Response, next: NextFunction) => {
  const { id: user_id } = req.cookies
  const { position_title, status, date_applied, company_name } = req.body;
  const query = `INSERT INTO applications (user_id, position_title, company_name, status, date_applied) VALUES (${user_id}, '${position_title}', '${company_name}', '${status}', '${date_applied}') RETURNING *`
  const newApp = await db.query(query);
  res.locals.app = (newApp.rows[0])
  return next();
}

const updateApplication = async (req: Request, res: Response, next: NextFunction) => {
  // const { user_id } = req.cookies;
  const {position_title, company_name, company_website, recent_contact_date, date_applied, reason, notes, application_link, status, app_id, user_id} = req.body;
  const query = `
   UPDATE applications 
    SET
    position_title = '${position_title}',
    company_name = '${company_name}',
    company_website = '${company_website}',
    recent_contact_date = '${recent_contact_date}',
    date_applied = '${date_applied}',
    reason = '${reason}',
    notes = '${notes}',
    application_link = '${application_link}',
    status = '${status}'
    WHERE user_id = ${user_id} AND app_id = ${app_id}`;
  await db.query(query);
}

const deleteApplication = async (req: Request, res: Response, next: NextFunction) => {
  const { app_id } = req.body;
  const { user_id } = req.cookies;
  const query = `DELETE FROM applications WHERE user_id = ${user_id} AND app_id = ${app_id}`;
  await db.query(query);
}

module.exports = {
  getAllApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication
}