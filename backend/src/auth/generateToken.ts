import 'dotenv/config';
import { sign } from 'jsonwebtoken';
import { UserModel } from '../interfaces';

const { ADMIN_TOKEN, USER_TOKEN } = process.env;

export default async function generateToken(user: UserModel): Promise<string> {
  try {
    if (user.rol === 'admin') {
      const token = await sign(user, (ADMIN_TOKEN as string));
      return token;
    }

    const token = await sign(user, (USER_TOKEN as string));
    return token;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error al asignar un token', error);
    return 'Error, no se pudo asignar un token';
  }
}
