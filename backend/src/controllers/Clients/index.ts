import { Router } from 'express';
import getClients from './getClients';
import notifications from './notifications';
import createGPS from './createGPS';
import getClientsById from './getClientsById';

const router = Router();

router.post('/', getClients);
router.post('/getId', getClientsById);

router.use('/notifications/', notifications);

router.post('/GPS', createGPS);

export default router;
