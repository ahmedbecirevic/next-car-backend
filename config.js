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
