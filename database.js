import { Sequelize } from 'sequelize';
import config from './config.js';
import logger from './logger.js';

let sequelizeConnection = {
  host: config.DB_HOST,
  database: config.DB_NAME,
  username: config.DB_USER,
  password: config.DB_HOST_PASSWORD,
  dialect: config.DB_DIALECT,
  port: config.DB_PORT,
};

if (config.NODE_ENV === 'production') {
  sequelizeConnection = {
    ...sequelizeConnection,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  };
}

const sequelize = new Sequelize(sequelizeConnection);

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
