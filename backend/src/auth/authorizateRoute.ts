import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import handleError from '../helpers/handleError';
import { UserModel } from '../interfaces';

const { ADMIN_TOKEN } = process.env;

function authorizateRoute(req: Request, res: Response, next: NextFunction) {
  const { token } = req.headers;
  if (!token) return res.status(403).json(handleError('No se recibió el token'));

  try {
    const isAuth = verify((token as string), (ADMIN_TOKEN as string)) as UserModel;
    req.body = isAuth;
    next();
  } catch (error) {
    return res.status(403).json(handleError('No esta autorizado'));
  }
  return res.status(200);
}

export default authorizateRoute;
