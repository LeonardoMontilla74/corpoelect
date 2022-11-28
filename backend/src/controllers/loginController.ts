import { compare } from 'bcrypt';
import Users from '../models/Users';
import { UserModel, MsgError } from '../interfaces';
import handleError from '../helpers/handleError';

async function loginController({ name, password }: UserModel): Promise<UserModel | MsgError> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userDB: any = await Users.findOne({ where: { name } });
  if (userDB) {
    const match = await compare((password as string), userDB.password);
    if (match) return (userDB.dataValues as UserModel);
  }
  return handleError('Usuario o contraseña incorrectos');
}

export default loginController;
