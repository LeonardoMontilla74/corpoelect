import { Router } from 'express';
import authorizateRoute from '../auth/authorizateRoute';
import users from '../controllers/users';

const router = Router();

router.use('/', authorizateRoute, users);

// eslint-disable-next-line import/prefer-default-export
export { router };
