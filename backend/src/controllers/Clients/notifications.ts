import { Router, Request, Response } from 'express';
import authorizateRoute from '../../auth/authorizateRoute';
import handleError from '../../helpers/handleError';
import Clients from '../../models/Clients';
import Notifications from '../../models/Notifications';
import { NotificationModel } from '../../types';

const router = Router();

router.get('/', authorizateRoute, async (req: Request, res: Response) => {
  try {
    const allNotifications = await Notifications.findAll({ include: Clients });
    res.json(allNotifications);
  } catch (error) {
    res.json(handleError(error as string));
  }
});

router.post('/create', async (req: Request, res: Response) => {
  try {
    const {
      idClient, userName, type, desc, statusNotification,
    }: NotificationModel = req.body;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const notification: any = await Notifications.create({
      idClient, userName, type, desc, statusNotification,
    });

    if (notification.dataValues.idNotification) {
      notification.addClients(idClient);
      return res.status(200).json({ msg: 'La notificación se ha sido creado correctamente' });
    }
    return res.status(406).json(handleError('Algo salió mal'));
  } catch (error) {
    return res.json(handleError(error as string));
  }
});

router.put('/update', authorizateRoute, async (req: Request, res: Response) => {
  const { idNotification, status, desc } = req.body;
  try {
    const notificationsUpdate = await Notifications.update(
      { status, desc },
      { where: { idNotification } },
    );
    if (notificationsUpdate[0] === 1) return res.status(200).json({ msg: 'La notificación se ha sido actualizado correctamente' });
    return res.status(406).json(handleError('Algo salió mal'));
  } catch (error) {
    return res.json(handleError(error as string));
  }
});

router.delete('/delete', authorizateRoute, async (req: Request, res: Response) => {
  const { idNotification } = req.headers;
  const notificationDelete = await Notifications.destroy({ where: { idNotification } });

  if (notificationDelete === 1) return res.status(200).json({ msg: 'Notificación borrada correctamente' });
  return res.status(406).json(handleError('Algo salió mal'));
});

export default router;
