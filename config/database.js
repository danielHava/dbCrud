require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgresql',
  },
  test: {
    username: 'user_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgresql',
  },
  production: {
    username: 'DB_USERNAME',
    password: 'DB_PASSWORD',
    database: 'DB_NAME',
    host: 'DB_HOSTNAME',
    dialect: 'postgresql',
  }
};