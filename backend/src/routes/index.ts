import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH = (__dirname);
const router = Router();

function getNames(fileName: string) { // 'login.ts'
  const names = fileName.split('.').shift(); // login
  return names;
}

// eslint-disable-next-line array-callback-return
readdirSync(PATH).map((file: string): void => {
  const names = getNames(file);
  if (names !== 'index') {
    import(`./${names}`).then((object) => {
      router.use(`/${names}`, object.router);
    });
  }
});

export default router;
