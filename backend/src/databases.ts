import { Sequelize } from 'sequelize';
import 'dotenv/config';

const {
  DB_NAME, DB_USER, DB_PASS, DB_HOST,
} = process.env;

const sequelize = process.env.NODE_ENV === 'production'
  ? new Sequelize({
    database: DB_NAME,
    dialect: 'postgres',
    host: DB_HOST,
    port: 5432,
    username: DB_USER,
    password: DB_PASS,
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: true,
  })
  : new Sequelize(
    `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
    { logging: false, native: false },
  );

export default sequelize;
