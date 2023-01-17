import { Router } from 'express';
import {
  deleteUser, getAllUsers, loginUser, registerUser, updateUser,
} from '../controllers/users';
import authorizateRoute from '../auth/authorizateRoute';
import checkToken from '../auth/checkToken';

const router = Router();

router.get('/', authorizateRoute, getAllUsers);

router.post('/login', loginUser);

router.post('/register', registerUser);

router.put('/update', checkToken, updateUser);

router.delete('/delete', authorizateRoute, deleteUser);

// eslint-disable-next-line import/prefer-default-export
export { router };
