import { Router } from 'express';
import getClients from './getClients';
import notifications from './notifications';
import createGPS from './createGPS';

const router = Router();

router.post('/', getClients);

router.use('/notifications/', notifications);

router.post('/GPS', createGPS);

export default router;
