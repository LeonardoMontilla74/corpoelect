import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import handleError from '../utils/handleError';

function checkToken(req: Request, res: Response, next: NextFunction) {
  try {
    const { token } = req.headers;
    if (!token) return res.status(200).json(handleError('No se recibió el token'));
    return next();
  } catch (e) {
    return res.status(500).json(handleError('No se recibió el token', e));
  }
}

export default checkToken;
