import { Op } from 'sequelize';
import Clients from '../models/Clients';
import Notifications from '../models/Notifications';
import { NotificationModel } from '../types';
import handleError from '../utils/handleError';

export const getAllNotification = async (param: string, value: string) => {
  const notifications = await Notifications.findAll({
    where: {
      [param]: {
        [Op.substring]: [value],
      },
    },
    include: Clients,
  });
  return notifications.length ? notifications : handleError('No se encontraron notificaciones');
};

export const createNotification = async ({
  idClient, userName, type, desc, statusNotification,
}: NotificationModel) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const notification: any = await Notifications.create({
    idClient, userName, type, desc, statusNotification,
  });
  if (notification) {
    notification.addClient(idClient);
    return { msg: 'Notificación creada con exito' };
  }
  return { msg: 'No se pudo crear la notificación' };
};

export const updateNotification = async (
  { idNotification, statusNotification }: NotificationModel,
) => {
  const notification = await Notifications.update(
    { statusNotification },
    { where: { idNotification } },
  );

  if (notification[0] === 1) return { msg: 'Se ha sido actualizado correctamente' };
  return { msg: 'No se encontró la notificación' };
};

export const deleteNotification = async (idNotification: number) => {
  const notification = await Notifications.destroy({ where: { idNotification } });
  if (notification === 1) return { msg: 'Notificación borrada correctamente' };
  return { msg: 'No se encontró la notificación' };
};
