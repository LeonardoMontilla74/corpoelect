import { DataTypes } from 'sequelize';
import sequelize from '../databases';

const Notifications = sequelize.define('Notifications', {
  idNotification: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idClient: {
    type: DataTypes.INTEGER,
  },
  userName: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  desc: {
    type: DataTypes.STRING,
  },
  statusNotification: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
});

export default Notifications;
