import { Sequelize } from 'sequelize';
import config from './config';
import dotenv from 'dotenv';
dotenv.config();

const nodeEnv: string = process.env.NODE_ENV || 'development';

if (nodeEnv == 'development') {
  const sequelize: Sequelize = new Sequelize({});
} else {
  const sequelize: Sequelize = new Sequelize({});
}
