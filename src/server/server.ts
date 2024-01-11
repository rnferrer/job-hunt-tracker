import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import cors from 'cors';

const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// routers
const authRouter = require('./routes/authRouter');
const interviewRouter = require('./routes/interviewRouter');
const applicationRouter = require('./routes/applicationRouter');
const recruiterRouter = require('./routes/recruiterRouter');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/application', applicationRouter);
app.use('/api/interview', interviewRouter);
app.use('/api/recruiter', recruiterRouter);

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