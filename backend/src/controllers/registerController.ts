import { hash } from 'bcrypt';
import { Request, Response, Router } from 'express';
import { UserModel } from '../interfaces/interfaces';
import Users from '../models/Users';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const user: UserModel = req.body;
  const passEncrypt = await hash((user.password as string), 8);
  try {
    const result = await Users.create({
      name: user.name,
      password: passEncrypt,
    });

    if (result) res.status(201).json(result);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error al crear el usuario', error);
    res.status(500).json({ msg: 'Error al crear el usuario' });
  }
});

export default router;
