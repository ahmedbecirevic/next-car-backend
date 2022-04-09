const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const envVar = process.env;

module.exports = {
  development: {
    username: envVar.DB_USER,
    password: envVar.DB_HOST_PASSWORD,
    database: envVar.DB_NAME,
    host: envVar.DB_HOST,
    dialect: envVar.DB_DIALECT,
  },
  test: {
    username: envVar.DB_USER,
    password: envVar.DB_HOST_PASSWORD,
    database: envVar.DB_NAME,
    host: envVar.DB_HOST,
    dialect: envVar.DB_DIALECT,
  },
  production: {
    username: envVar.DB_USER,
    password: envVar.DB_HOST_PASSWORD,
    database: envVar.DB_NAME,
    host: envVar.DB_HOST,
    dialect: envVar.DB_DIALECT,
    port: envVar.DB_PORT,
  },
};
