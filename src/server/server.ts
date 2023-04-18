import express, { Request, Response, NextFunction, RequestHandler } from 'express';

require('dotenv').config();
console.log(process.env.PG_URI)

const app = express();

// routers
const interviewRouter = require('./routes/interviewRouter');
const applicationRouter = require('./routes/applicationRouter');

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('HELLO!!!')
})

app.use('/api/application', applicationRouter);
app.use('/api/interview', interviewRouter);

type ServerError = {
  log: string,
  status: number,
  message: {err: string}
};
app.use('/', (err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr: ServerError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(3000, () => console.log('server is listening on port 3000'));