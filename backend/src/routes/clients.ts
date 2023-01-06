import { Router } from 'express';
import clients from '../controllers/Clients';

const router = Router();

router.use('/', clients);

// eslint-disable-next-line import/prefer-default-export
export { router };
