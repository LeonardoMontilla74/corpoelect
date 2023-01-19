import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import handleError from '../utils/handleError';
import { User } from '../types';

const { ADMIN_TOKEN } = process.env;

function authorizateRoute(req: Request, res: Response, next: NextFunction) {
  const { token } = req.headers;
  if (!token) return res.status(200).json(handleError('No se recibió el token'));

  try {
    verify((token as string), (ADMIN_TOKEN as string)) as User;
    next();
    return res.status(200);
  } catch (error) {
    return res.status(200).json(handleError('No esta autorizado'));
  }
}

export default authorizateRoute;
