import { hash } from 'bcrypt';
import { UserModel } from '../interfaces/interfaces';
import Users from '../models/Users';

async function registerController(user: UserModel) {
  const checkExist = await Users.findOne({ where: { name: user.name } });
  if (checkExist) return { msg: 'El usuario ya existe' };

  try {
    const passEncrypt = await hash((user.password as string), 8);
    const result = await Users.create({
      name: user.name,
      password: passEncrypt,
    });
    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error al crear el usuario', error);
    return { msg: 'Error al crear el usuario' };
  }
}

export default registerController;
