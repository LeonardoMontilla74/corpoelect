import { Request, Response } from 'express';
import handleError from '../utils/handleError';
import {
  getAll, login, register, update, userDelete,
} from '../services/users.services';
import { User } from '../types';

// GET => http://localhost:4000/users   -----> headers (token ADMIN)
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await getAll();
    return res.status(200).json(allUsers);
  } catch (e) {
    return res.status(500).json(handleError('CONTROLLERS_USER_ALL', e));
  }
};

// POST => http://localhost:4000/users/register  -----> body (name, pass)
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, password }: User = req.body;
    if (name && password) {
      const userCreate = await register({ name, password });
      return res.status(200).json(userCreate);
    }
    return res.status(206).json(handleError('No suminitró los datos requeridos'));
  } catch (e) {
    return res.status(500).json(handleError('CONTROLLERS_USER_REGISTER', e));
  }
};

// POST => http://localhost:4000/users/login -----> body (name, pass)
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { name, password }: User = req.body;
    if (name && password) {
      const userDB = await login({ name, password });
      return res.status(200).json(userDB);
    }

    return res.status(206).json(handleError('No suminitró los datos requeridos'));
  } catch (e) {
    return res.status(500).json(handleError('CONTROLLERS_USER_LOGIN', e));
  }
};

// PUT => http://localhost:4000/users/update --->  headers (token ADMIN)
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const msgResult = await update(user);
    return res.status(200).json(msgResult);
  } catch (e) {
    return res.status(500).json(handleError('CONTROLLERS_USER_UPDATE', e));
  }
};

// DELETE => http://localhost:4000/users/delete  ---> headers (token ADMIN)
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const msgResult = await userDelete(user);
    return res.status(202).json(msgResult);
  } catch (e) {
    return res.status(500).json(handleError('CONTROLLERS_USER_DELETE', e));
  }
};
