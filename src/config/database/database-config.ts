import { Pool } from 'pg';
import { config } from '../config';
import dotenv from 'dotenv';
dotenv.config();

export class DatabaseConfig {
  private nodeEnv: string = process.env.NODE_ENV || 'development';

  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: config[this.nodeEnv].databaseUsername,
      host: config[this.nodeEnv].databaseHost,
      database: config[this.nodeEnv].databaseName,
      password: config[this.nodeEnv].databasePassword,
      port: config[this.nodeEnv].databasePort,
    });
  }

  public getPool = () => {
    return this.pool;
  };
}
