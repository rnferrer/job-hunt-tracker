import express, { Request, Response, NextFunction, RequestHandler } from 'express';


const app = express();

const cookieParser = require('cookie-parser');

// routers
const authRouter = require('./routes/authRouter');
const interviewRouter = require('./routes/interviewRouter');
const applicationRouter = require('./routes/applicationRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('HELLO!!!')
})

app.use('/api/auth', authRouter);
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