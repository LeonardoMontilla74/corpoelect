import { DataTypes } from 'sequelize';
import sequelize from '../databases';

const Clients = sequelize.define('Clients', {
  nombre: {
    type: DataTypes.STRING,
  },
  cedula: {
    type: DataTypes.INTEGER,
  },
  telefono: {
    type: DataTypes.BIGINT,
  },
}, {
  timestamps: false,
});

export default Clients;
