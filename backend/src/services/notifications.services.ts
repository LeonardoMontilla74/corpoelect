import Clients from '../models/Clients';
import Notifications from '../models/Notifications';
import { NotificationModel } from '../types';

export const getAllNotification = async () => {
  const notifications: unknown = await Notifications.findAll({ include: { model: Clients } });
  if (notifications) return notifications as NotificationModel[];
  return { msg: 'No se encontraron notificaciones' };
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
    return notification as NotificationModel;
  }
  return { msg: 'No se pudo crear la notificación' };
};

export const updateNotification = async (idNotification: number, statusNotification: string) => {
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
