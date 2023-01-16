import { hash } from 'bcrypt';
import Users from '../models/Users';
import handleError from './handleError';

async function preloaderAdmin() {
  const checkAdmin = await Users.findByPk(1);

  try {
    if (!checkAdmin) {
      await Users.create({
        name: 'admin',
        password: await hash('admin', 8),
        rol: 'admin',
        auth: true,
      });
      // eslint-disable-next-line no-console
      console.log('Administrador precargado');
    }
  } catch (error) {
    handleError('Ya existe el administrador');
  }
}

export default preloaderAdmin;
