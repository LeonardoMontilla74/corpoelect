import 'dotenv/config';
import sequelize from './databases';
import server from './server';
import preloaderAdmin from './utils/preloaderAdmin';

const { PORT } = process.env;

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT);
  preloaderAdmin();
});
