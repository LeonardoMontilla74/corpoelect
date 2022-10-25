import { Request, Response, Router } from 'express';
import registerController from '../controllers/registerController';
import { UserModel } from '../interfaces/interfaces';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const user: UserModel = req.body;
  const result = await registerController(user);
  res.status(201).json(result);
});

// eslint-disable-next-line import/prefer-default-export
export { router };
