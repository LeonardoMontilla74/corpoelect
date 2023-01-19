import { Router } from 'express';
import authorizateRoute from '../auth/authorizateRoute';
import checkToken from '../auth/checkToken';
import {
  createNotifications, deleteNotiications, getNotications, updateNotications,
} from '../controllers/notifications';

const router = Router();

router.post('/', authorizateRoute, getNotications);

router.post('/create', checkToken, createNotifications);

router.put('/update', authorizateRoute, updateNotications);

router.delete('/delete', authorizateRoute, deleteNotiications);

// eslint-disable-next-line import/prefer-default-export
export { router };
