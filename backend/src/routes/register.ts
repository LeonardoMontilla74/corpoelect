import { Router } from 'express';
import registerController from '../controllers/registerController';

const router = Router();

router.use('/', registerController);

// eslint-disable-next-line import/prefer-default-export
export { router };
