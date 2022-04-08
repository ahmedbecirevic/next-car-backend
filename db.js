import { Sequelize } from 'sequelize';
import config from './config.js';
import logger from './logger.js';

const sequelize = new Sequelize({
  host: config.DB_HOST,
  database: config.DB_NAME,
  username: config.DB_USER,
  password: config.DB_HOST_PASSWORD,
  dialect: config.DB_DIALECT,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export const testConnection = async () => {
  try {
    if (config.NODE_ENV === 'test') {
      return;
    }
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
};

export default sequelize;
