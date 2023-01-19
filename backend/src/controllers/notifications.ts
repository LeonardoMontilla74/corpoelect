import { Request, Response } from 'express';
import handleError from '../utils/handleError';
import {
  createNotification, deleteNotification, getAllNotification, updateNotification,
} from '../services/notifications.services';

// GET => http://localhost:4000/notifications headers (token ADMIN)
export const getNotications = async (req: Request, res: Response) => {
  try {
    const { param, value } = req.body;
    if (!param) return res.status(200).json(handleError('Necesita un parametro de busqueda'));
    const notifications = await getAllNotification(param, value);
    return res.send(notifications);
  } catch (e) {
    return res.status(500).json(handleError('ERROR_CONTROLLER_NOTIFICATIONS', e));
  }
};

// POST => http://localhost:4000/notifications/create  body (notifications)
export const createNotifications = async (req: Request, res: Response) => {
  try {
    const { notification } = req.body;
    const result = await createNotification(notification);
    return res.send(result);
  } catch (e) {
    return res.status(500).json(handleError('ERROR_CONTROLLER_NOTIFICATIONS', e));
  }
};

// PUT => http://localhost:4000/notifications/update  body (status)
export const updateNotications = async (req: Request, res: Response) => {
  try {
    const notification = req.body;
    const result = await updateNotification(notification);
    return res.send(result);
  } catch (e) {
    return res.status(500).json(handleError('ERROR_CONTROLLER_NOTIFICATIONS', e));
  }
};

// DELETE => http://localhost:4000/notifications/delete  body (idNotification)
export const deleteNotiications = async (req: Request, res: Response) => {
  try {
    const { idNotification } = req.body;
    const result = await deleteNotification(Number(idNotification));
    return res.send(result);
  } catch (e) {
    return res.status(500).json(handleError('ERROR_CONTROLLER_NOTIFICATIONS', e));
  }
};
