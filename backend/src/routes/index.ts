import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json('Bienvenido a la API de corpoelect');
});

export default router;
