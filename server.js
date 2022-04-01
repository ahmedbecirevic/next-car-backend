import express from 'express';
import cors from 'cors';

import logger from './logger.js';
import envVar, { validateEnvironmentVariables } from './config.js';
import userRouter from './modules/user/userRouter.js';
import { testConnection } from './db.js';

validateEnvironmentVariables();
testConnection();

const app = express();
const port = envVar.PORT;
const router = express.Router();

app.use(
  cors({
    origin: envVar.FRONTEND_ORIGIN,
  }),
  express.urlencoded({ extended: true }),
  express.json(),
);

router.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/', router);
app.use('/user', userRouter);

app.listen(port, () => {
  logger.info(`App listening at http://localhost:${port}`);
});

export default app;
