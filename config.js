import dotenv from 'dotenv';
import logger from './logger.js';

dotenv.config();

const envVar = process.env;

export default {
  NODE_ENV: envVar.NODE_ENV,
  PORT: envVar.PORT,
  DB_HOST: envVar.DB_HOST,
  DB_NAME: envVar.DB_NAME,
  DB_USER: envVar.DB_USER,
  DB_HOST_PASSWORD: envVar.DB_HOST_PASSWORD,
  DB_DIALECT: envVar.DB_DIALECT,
  DB_PORT: envVar.DB_PORT,
  FRONTEND_ORIGIN: envVar.FRONTEND_ORIGIN,
  GOOGLE_CLIENT_ID: envVar.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: envVar.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_API_URL: envVar.GOOGLE_CALLBACK_API_URL,
  JWT_SECRET: envVar.JWT_SECRET,
  JWT_EXPIRE: envVar.JWT_EXPIRE,
  SPACES_SECRET: envVar.SPACES_SECRET,
  SPACES_BUCKET_NAME: envVar.SPACES_BUCKET_NAME,
  SPACES_REGION: envVar.SPACES_REGION,
};

export const validateEnvironmentVariables = () => {
  const environmentVariables = [
    'NODE_ENV',
    'PORT',
    'DB_HOST',
    'DB_NAME',
    'DB_USER',
    'DB_HOST_PASSWORD',
    'DB_DIALECT',
    'DB_PORT',
    'FRONTEND_ORIGIN',
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
    'JWT_SECRET',
    'JWT_EXPIRE',
    'GOOGLE_CALLBACK_API_URL',
    'SPACES_SECRET',
    'SPACES_BUCKET_NAME',
    'SPACES_REGION',
  ];
  const missingEnvironmentVariables = [];

  environmentVariables.forEach((environmentVariable) => {
    if (!process.env[environmentVariable]) {
      missingEnvironmentVariables.push(environmentVariable);
    }
  });

  if (missingEnvironmentVariables.length) {
    throw new Error(`❗ Missing environment variables:\n${missingEnvironmentVariables.join('\n')}`);
  }
  logger.info('Environment successfully configured!');
};

export const SWAGGER_OPTIONS = {
  definition: {
    openapi: '3.0.1',
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
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          in: 'header',
        },
      },
    },
    security: [{
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    }],
  },
  apis: ['./modules/car/carRouter.js', './modules/user/userRouter.js'],
};
