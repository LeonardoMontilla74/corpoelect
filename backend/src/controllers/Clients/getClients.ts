import { Request, Response } from 'express';
import { Op } from 'sequelize';
import handleError from '../../helpers/handleError';
import Clients from '../../models/Clients';

async function getClients(req: Request, res: Response) {
  try {
    const { param, value } = req.body;

    const client = await Clients.findAll({
      where: {
        [param.toUpperCase()]: {
          [Op.substring]: [value.toUpperCase()],
        },
      },
    });

    return res.json(client.length ? client : handleError('No se encontró ningún usuario'));
  } catch (error) {
    return res.json(handleError(error as string));
  }
}

export default getClients;
