import { Request, Response } from 'express';

async function createGPS(req: Request, res: Response) {
  res.json('Vamos a crear el dato GPS');
}

export default createGPS;
