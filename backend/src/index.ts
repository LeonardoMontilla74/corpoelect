import 'dotenv/config';
import sequelize from './databases';
import server from './server';
import preloaderAdmin from './utils/preloaderAdmin';

const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
  // eslint-disable-next-line no-console
  server.listen(PORT, () => console.log(`Server at on port ${PORT}`));
  preloaderAdmin();
});
