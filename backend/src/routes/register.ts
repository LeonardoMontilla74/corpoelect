import {
  NextFunction, Request, Response, Router,
} from 'express';
import registerController from '../controllers/registerController';
import handleError from '../helpers/handleError';
import { UserModel } from '../interfaces';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const user: UserModel = req.body;

  try {
    if (user.name && user.password) {
      const userDB = await registerController(user);
      return res.status(201).json(userDB);
    }
    return res.status(206).json(handleError('No suminitró los datos requeridos'));
  } catch (error) {
    // eslint-disable-next-line no-console
    handleError('Error antes de registrar', error);
    next();
    return res.status(500);
  }
});

// eslint-disable-next-line import/prefer-default-export
export { router };
