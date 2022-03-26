import express from 'express';
import logger from './logger.js';
import envVar, { validateEnvironmentVariables } from './config.js';
import userRouter from './modules/user/userRouter.js';

validateEnvironmentVariables();

const app = express();
const port = envVar.PORT;
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/', router);
app.use('/user', userRouter);

app.listen(port, () => {
  logger.info(`App listening at http://localhost:${port}`);
});

export default app;
