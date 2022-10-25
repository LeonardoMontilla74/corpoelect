import { hash } from 'bcrypt';
import Users from '../models/Users';

async function preloaderAdmin() {
  const admin = await Users.create({
    name: 'admin',
    password: await hash('admin', 8),
    rol: 'admin',
    auth: true,
  });
  if (admin) {
    // eslint-disable-next-line no-console
    console.log('Administrador precargado');
  }
}

export default preloaderAdmin;
