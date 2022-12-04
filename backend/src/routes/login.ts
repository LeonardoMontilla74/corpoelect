import {
  NextFunction, Request, Response, Router,
} from 'express';
import { User } from '../types';
import generateToken from '../auth/generateToken';
import loginController from '../controllers/loginController';
import handleError from '../helpers/handleError';

const router = Router();

router.post('/', async (req: Request, res: Response, nex: NextFunction): Promise<Response> => {
  const user: User = req.body;
  try {
    if (user.name && user.password) {
      const userDB = await loginController(user);
      if (userDB) {
        const token = await generateToken(userDB as User);
        return res.status(200).json({ token, userDB });
      }
      return res.status(206).json(handleError('Usuario o contraseña incorrectos'));
    }
    return res.status(206).json(handleError('Faltan lo datos necesarios'));
  } catch (error) {
    // eslint-disable-next-line no-console
    nex();
    return res.status(500).json(handleError('Error antes de hacer el login', error));
  }
});

// eslint-disable-next-line import/prefer-default-export
export { router };
