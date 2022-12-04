import { compare } from 'bcrypt';
import Users from '../models/Users';
import { User, MsgError } from '../types';
import handleError from '../helpers/handleError';

async function loginController({ name, password }: User): Promise<User | MsgError> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userDB: any = await Users.findOne({ where: { name } });
  if (userDB) {
    const match = await compare((password as string), userDB.password);
    if (match) return (userDB.dataValues as User);
  }
  return handleError('Usuario o contraseña incorrectos');
}

export default loginController;
