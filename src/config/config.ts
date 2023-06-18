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

type Config = {
  databaseHost: string | undefined;
  databaseUsername: string | undefined;
  databasePassword: string | undefined;
  databasePort: number | undefined;
  databaseName: string | undefined;
  dialect: string | undefined;
};

const config: Record<string, Config> = {
  development: {
    databaseHost: DATABASE_HOST,
    databaseUsername: DATABASE_USERNAME,
    databasePassword: DATABASE_PASSWORD,
    databasePort: Number(DATABASE_PORT),
    databaseName: DATABASE_TEST_NAME,
    dialect: DIALECT,
  },
  production: {
    databaseHost: DATABASE_HOST,
    databaseUsername: DATABASE_USERNAME,
    databasePassword: DATABASE_PASSWORD,
    databasePort: Number(DATABASE_PORT),
    databaseName: DATABASE_NAME,
    dialect: DIALECT,
  },
};

export { config };
