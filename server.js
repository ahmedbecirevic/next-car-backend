import express from 'express';
import cors from 'cors';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import passport from 'passport';
import logger from './logger.js';
import envVar, { validateEnvironmentVariables, SWAGGER_OPTIONS } from './config.js';
import userRouter from './modules/user/userRouter.js';
import carRouter from './modules/car/carRouter.js';
import postRouter from './modules/post/postRouter.js';
import imageRouter from './modules/image/imageRouter.js';
import purchaseHistoryRouter from './modules/purchaseHistory/purchaseHistoryRouter.js';
import { testConnection } from './database.js';
import './modules/user/passport.js';

validateEnvironmentVariables();
testConnection();

const app = express();
const port = envVar.PORT;
const router = express.Router();

const specs = swaggerJsdoc(SWAGGER_OPTIONS);

app.use(
  cors({
    origin: envVar.FRONTEND_ORIGIN,
    credentials: true,
  }),
  express.urlencoded({ extended: true }),
  express.json({ limit: '50mb' }),
  passport.initialize(),
);

router.get('/', (req, res) => {
  res.send('hello world');
});

app.use(
  '/api-docs',
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(specs),
);

app.use('/', router);
app.use('/users', userRouter);
app.use('/cars', carRouter);
app.use('/posts', postRouter);
app.use('/images', imageRouter);
app.use('/purchase-history', purchaseHistoryRouter);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  return res.status(error.code || 500)
    .send({ message: error.message || 'An unknown error occurred!' });
});

app.listen(port, () => {
  logger.info(`App listening at PORT:${port}`);
});

export default app;
