import { hash } from 'bcrypt';
import handleError from '../helpers/handleError';
import { MsgError, UserModel } from '../interfaces';
import Users from '../models/Users';

async function registerController(user: UserModel): Promise<UserModel | MsgError> {
  const checkExist = await Users.findOne({ where: { name: user.name } });
  if (checkExist) return handleError('El usuario ya existe');

  try {
    const passEncrypt = await hash((user.password as string), 8);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userDB: any = await Users.create({
      name: user.name,
      password: passEncrypt,
    });
    return (userDB as UserModel);
  } catch (error) {
    // eslint-disable-next-line no-console
    return handleError('Error al registrar el usuario', error);
  }
}

export default registerController;
