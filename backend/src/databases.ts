import { Sequelize } from 'sequelize';
import 'dotenv/config';

const {
  DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT,
} = process.env;

const sequelize = new Sequelize(
  `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false, native: false },
);

export default sequelize;
