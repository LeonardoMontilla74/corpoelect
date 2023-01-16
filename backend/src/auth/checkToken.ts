import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import handleError from '../utils/handleError';

function checkToken(req: Request, res: Response, next: NextFunction) {
  const { token } = req.headers;
  if (!token) res.status(403).json(handleError('No se recibió el token'));

  next();
}

export default checkToken;
