import { Router } from 'express';
import { getAllClients, getClientById, insertGPS } from '../controllers/clients';
import checkToken from '../auth/checkToken';

const router = Router();

router.get('/', checkToken, getAllClients);
router.get('/getById', checkToken, getClientById);
router.post('/postGPS', checkToken, insertGPS);

// eslint-disable-next-line import/prefer-default-export
export { router };
