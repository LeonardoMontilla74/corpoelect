import { Request, Response } from 'express';
import handleError from '../../helpers/handleError';
import Clients from '../../models/Clients';

async function getClientsById(req: Request, res: Response) {
  try {
    const { idClient } = req.body;

    const clientDetails = await Clients.findByPk(idClient);

    return res.json(clientDetails || handleError('No se encontró ningún usuario'));
  } catch (error) {
    return res.json(handleError(error as string));
  }
}

export default getClientsById;
