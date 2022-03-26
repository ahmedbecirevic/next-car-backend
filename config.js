import dotenv from 'dotenv';
import logger from './logger.js';

dotenv.config();

const envVar = process.env;

export default {
  NODE_ENV: envVar.NODE_ENV,
  PORT: envVar.PORT,
};

export const validateEnvironmentVariables = () => {
  const environmentVariables = [
    'NODE_ENV',
    'PORT',
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
