import {
  NextFunction, Request, Response, Router,
} from 'express';
import registerController from '../controllers/registerController';
import { UserModel } from '../interfaces/interfaces';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const user: UserModel = req.body;

  try {
    if (user.name && user.password) {
      const result = await registerController(user);
      res.status(201).json(result);
    }
    res.status(206).json({ msg: 'No suminitró los datos requeridos' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error antes de crear el usuario', error);
    next();
  }
});

// eslint-disable-next-line import/prefer-default-export
export { router };
