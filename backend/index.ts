import 'dotenv/config';
import server from './src/app';
import sequelize from './src/databases';
import preloaderAdmin from './src/helpers/preloaderAdmin';

const PORT = process.env.PORT || 3001;

sequelize.sync({ force: true }).then(() => {
  // eslint-disable-next-line no-console
  server.listen(PORT, () => console.log(`Server at on port ${PORT}`));
  preloaderAdmin();
});
