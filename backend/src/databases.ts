import { Sequelize } from 'sequelize';
import 'dotenv/config';

const {
  DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT,
} = process.env;

const sequelize = new Sequelize(
  `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false, native: false },
);

/*
const sequelize = new Sequelize({
  database: DB_NAME,
  dialect: 'postgres',
  host: DB_HOST,
  port: Number(DB_PORT),
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
});
*/

export default sequelize;
