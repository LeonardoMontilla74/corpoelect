import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'corpoelect',
  'postgres',
  '0108',
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    native: false,
  },
);

export default sequelize;
