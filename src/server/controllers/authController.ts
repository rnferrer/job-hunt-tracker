import { log } from 'console';
import express, { Request, Response, NextFunction, RequestHandler } from 'express';
const db = require('../models/jobHuntModel');

const register = async (req:Request, res:Response, next:NextFunction) => {
  const { username, password } = req.body;

  //first check if user exists in our database
  const querySelector = `SELECT * FROM users WHERE username = '${username}'`;
  const user = await db.query(querySelector);
  const userRow = user.rows[0];

  if (!userRow) {
    await db.query(`INSERT INTO users (username, password) VALUES ('${username}', '${password}')`)
    const newUser = await db.query(querySelector);
    res.cookie('id', newUser.rows[0].user_id);
    res.locals.newUser = newUser.rows[0];
    return next();
  } 
  return res.status(200).send('User already exists!');
};

const login = async (req:Request, res:Response, next:NextFunction) => {
  const { username, password } = req.body;
  const user = await db.query(`SELECT * FROM users WHERE username = '${username}' and password = '${password}'`)
  const userRow = user.rows[0];
  console.log(userRow)
  if (!userRow) {
    res.cookie('id', user.rows[0].user_id);
    return res.status(200).send('Login successful!');
  }
  return res.status(200).send('Login unsuccessful.');
};

module.exports = {
  register,
  login
};