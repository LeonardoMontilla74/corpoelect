import 'dotenv/config';
import { sign } from 'jsonwebtoken';
import { User } from '../types';
import handleError from '../utils/handleError';

const { ADMIN_TOKEN, USER_TOKEN } = process.env;

const generateToken = (user: User) => {
  try {
    if (user.rol === 'admin') {
      const token = sign(user, (ADMIN_TOKEN as string));
      return token;
    }
    const token = sign(user, (USER_TOKEN as string));
    return token;
  } catch (e) {
    return handleError('Error, no se pudo asignar un token', e);
  }
};

export default generateToken;
