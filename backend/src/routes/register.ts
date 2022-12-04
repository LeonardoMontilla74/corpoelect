import {
  NextFunction, Request, Response, Router,
} from 'express';
import registerController from '../controllers/registerController';
import handleError from '../helpers/handleError';
import { User } from '../types';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const user: User = req.body;

  try {
    if (user.name && user.password) {
      const userDB = await registerController(user);
      const token = {};
      return res.status(201).json({ token, userDB });
    }
    return res.status(206).json(handleError('No suminitró los datos requeridos'));
  } catch (error) {
    // eslint-disable-next-line no-console
    next();
    return res.status(500).json(handleError('Error antes de registrar', error));
  }
});

// eslint-disable-next-line import/prefer-default-export
export { router };
