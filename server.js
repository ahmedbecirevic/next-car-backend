import express from 'express';
import cors from 'cors';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import logger from './logger.js';
import envVar from './config.js';
import userRouter from './modules/user/userRouter.js';
import carRouter from './modules/car/carRouter.js';
// import { testConnection } from './database.js';

// validateEnvironmentVariables();
// testConnection();

const app = express();
const port = envVar.PORT;
const router = express.Router();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NextCar API',
      version: '1.0.0',
      description: 'Description for V1',
    },
    servers: [
      {
        url: 'http://localhost:8080',
      },
    ],
  },
  apis: ['./modules/car/carRouter.js', './modules/user/userRouter.js'],
};

const specs = swaggerJsdoc(options);

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

app.use(
  '/api-docs',
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(specs),
);

app.use('/', router);
app.use('/user', userRouter);
app.use('/cars', carRouter);

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
