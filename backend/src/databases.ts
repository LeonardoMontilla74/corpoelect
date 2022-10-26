import { Sequelize } from 'sequelize';
import 'dotenv/config';

const {
  DB_NAME, DB_USER, DB_PASS, DB_HOST,
} = process.env;

const sequelize = new Sequelize(
  (DB_NAME as string),
  (DB_USER as string),
  (DB_PASS as string),
  {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
    native: false,
  },
);

export default sequelize;
