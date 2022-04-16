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
  JWT_SECRET: envVar.JWT_SECRET,
  GOOGLE_CLIENT_ID: envVar.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: envVar.GOOGLE_CLIENT_SECRET,
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
    'JWT_SECRET',
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
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
