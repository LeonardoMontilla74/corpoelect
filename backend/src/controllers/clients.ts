import { Request, Response } from 'express';
import handleError from '../utils/handleError';
import { allClients, getClient, postGPS } from '../services/clients.services';

// GET => http://localhost:4000/clients ----> headers (token)
export const getAllClients = async (req: Request, res: Response) => {
  try {
    const { param, value } = req.body;
    if (!param) return res.status(404).json(handleError('Necesita un parametro de busqueda'));
    const result = await allClients(param, value);
    return res.send(result);
  } catch (e) {
    return res.status(500).json(handleError('ERROR_CONTROLLER', e));
  }
};

// GET => http://localhost:4000/clients/getById ----> headers (token) ---> body (idClient)
export const getClientById = async (req: Request, res: Response) => {
  try {
    const { idClient } = req.body;
    const result = await getClient(idClient);
    return res.send(result);
  } catch (e) {
    return res.status(500).json(handleError('ERROR_CONTROLLER', e));
  }
};

// POST => http://localhost:4000/clients/postGPS ----> headers (token)  --> body (idClient)
export const insertGPS = async (req: Request, res: Response) => {
  try {
    const { idClient } = req.body;
    const result = await postGPS(idClient);
    return res.send(result);
  } catch (e) {
    return res.status(500).json(handleError('ERROR_CONTROLLER', e));
  }
};
