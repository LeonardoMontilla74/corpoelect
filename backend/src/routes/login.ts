import {
  NextFunction, Request, Response, Router,
} from 'express';
import { UserModel } from '../interfaces';
import generateToken from '../auth/generateToken';
import loginController from '../controllers/loginController';
import handleError from '../helpers/handleError';

const router = Router();

router.post('/', async (req: Request, res: Response, nex: NextFunction): Promise<Response> => {
  const user: UserModel = req.body;
  try {
    if (user.name && user.password) {
      const userDB = await loginController(user);
      if (userDB) {
        const token = await generateToken(userDB as UserModel);
        return res.status(200).json({ token, userDB });
      }
      const msg = handleError('Usuario o contraseña incorrectos');
      return res.status(206).json(msg);
    }
    const msg = handleError('Faltan lo datos necesarios');
    return res.status(206).json(msg);
  } catch (error) {
    // eslint-disable-next-line no-console
    handleError('Error antes de hacer el login', error);
    nex();
    return res.status(500);
  }
});

// eslint-disable-next-line import/prefer-default-export
export { router };
