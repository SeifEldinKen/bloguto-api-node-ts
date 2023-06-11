import dotenv from 'dotenv';
dotenv.config();

const {
  PORT,
  NODE_ENV,
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_TEST_NAME,
  DIALECT,
} = process.env;

export = {
  development: {
    databaseHost: DATABASE_HOST,
    databaseUsername: DATABASE_USERNAME,
    databasePassword: DATABASE_PASSWORD,
    databasePort: DATABASE_PORT,
    databaseName: DATABASE_TEST_NAME,
    dialect: DIALECT,
  },
  production: {
    databaseHost: DATABASE_HOST,
    databaseUsername: DATABASE_USERNAME,
    databasePassword: DATABASE_PASSWORD,
    databasePort: DATABASE_PORT,
    databaseName: DATABASE_NAME,
    dialect: DIALECT,
  },
};
