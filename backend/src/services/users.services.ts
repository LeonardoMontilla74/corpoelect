import { compare, hash } from 'bcrypt';
import Users from '../models/Users';
import { User } from '../types';
import handleError from '../utils/handleError';
import generateToken from '../auth/generateToken';

export const getAll = async () => {
  const allUsers: unknown = await Users.findAll({ attributes: { exclude: ['password'] } });
  if (allUsers) return allUsers as User[];

  return handleError('No se encontraró ningún usuario');
};

export const register = async ({ name, password }: User) => {
  const checkExist = await Users.findOne({ where: { name } });
  if (checkExist) return handleError('El usuario ya existe');

  const passEncrypt = await hash((password as string), 8);
  const userCreate: unknown = await Users.create({ name, password: passEncrypt });
  if (userCreate) return userCreate as User;

  return handleError('No se pudo crear el usuario');
};

export const login = async ({ name, password }: User) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userDB: any = await Users.findOne({ where: { name } });
  if (userDB) {
    const match = await compare((password as string), userDB.password);
    if (match) {
      const token = generateToken(userDB.dataValues);
      return ({ token, userDB });
    }
  }
  return handleError('Usuario o contraseña incorrectos');
};

export const update = async ({
  idUser, name, password, rol, auth,
}: User) => {
  let passEncrypt = '';
  if (password) passEncrypt = await hash((password as string), 8);

  const userUpdate = await Users.update(
    {
      name, password: passEncrypt, rol, auth,
    },
    { where: { idUser } },
  );

  if (userUpdate[0] === 1) return { msg: 'El usuario ha sido actualizado correctamente' };
  return { msg: 'No se encontró el usuario' };
};

export const userDelete = async ({ idUser }: User) => {
  const user = await Users.destroy({ where: { idUser } });

  if (user === 1) return { msg: 'Usuario borrado correctamente' };
  return { msg: 'No se encontró el usuario' };
};
