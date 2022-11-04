import { compare } from 'bcrypt';
import Users from '../models/Users';
import { UserModel } from '../interfaces';

async function loginController({ name, password }: UserModel): Promise<UserModel | null> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userDB: any = await Users.findOne({ where: { name } });
  if (userDB) {
    const match = await compare((password as string), userDB.password);
    if (match) return (userDB.dataValues as UserModel);
  }
  return null;
}

export default loginController;
