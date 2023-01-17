import { Op } from 'sequelize';
import Clients from '../models/Clients';
import Notifications from '../models/Notifications';
import handleError from '../utils/handleError';

export const allClients = async (param: string, value: string) => {
  const client = await Clients.findAll({
    where: {
      [param.toUpperCase()]: {
        [Op.substring]: [value.toUpperCase()],
      },
    },
    include: Notifications,
  });
  return client.length ? client : handleError('No se encontró ningún cliente');
};

export const getClient = async (idClient: number) => {
  const client = await Clients.findByPk(idClient, { include: Notifications });
  return client || handleError('No se encontró ningún usuario');
};

export const postGPS = async (idClient: number) => ({ msg: 'Esta ruta aún está en desarrollo', idClient });
