import { DataTypes } from 'sequelize';
import sequelize from '../databases';

const Clients = sequelize.define('Clients', {
  RUTA: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  OFICINA: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  GPART: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NOMBRE: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TLF: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  VKONTO: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CONTRATO: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NIC: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CUENTA_ANTIGUA: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  RUTA_OPEN: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ITINERARIO: {
    type: DataTypes.STRING,
  },
  AOL: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DIRECCION: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TIPO_USUARIO: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TIPO_CLIENTE: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TIPO_TARIFA: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  VERTRAG: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ANLAGE: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  VSTELLE: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  HAUS: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  UND_LECT: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  UND_LECT2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CIAU_ORIGEN: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CICNOR: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TARIFTYP_AB: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  EQUNR: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SERNR: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  HERST: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  BAUFORM: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AMP_PRI: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AMP_SEC: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  VOL_PRI: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  VOL_SEC: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DAC: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CTC: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DEVLOC: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CODIGO_POSTAL: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  FACTURAS: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DEUDA: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
});

export default Clients;
