import { Request, Response, Router } from 'express';
import handleError from '../helpers/handleError';
import Users from '../models/Users';

const router = Router();

router.get('/users', async (req: Request, res: Response) => {
  const allUsers = await Users.findAll({ attributes: { exclude: ['password'] } });
  return res.status(200).json(allUsers);
});

router.put('/users/update', async (req: Request, res: Response) => {
  const { id, rol, auth } = req.body;

  try {
    const userUpdate = await Users.update(
      { rol, auth },
      { where: { id } },
    );

    if (userUpdate[0] === 1) return res.status(200).json({ msg: 'El usuario ha sido actualizado correctamente' });
    return res.status(406).json(handleError('No se encontró el usuario'));
  } catch (error) {
    return handleError('Error antes de actualizar el usuario', error);
  }
});

router.delete('/users/delete', async (req: Request, res: Response) => {
  const { id } = req.body;
  const userDelete = await Users.destroy({ where: { id } });

  if (userDelete === 1) return res.status(200).json({ msg: 'Usuario borrado correctamente' });
  return res.status(202).json(handleError('No se ha encontrado el usuario'));
});

export default router;
