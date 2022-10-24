import 'dotenv/config';
import server from './src/app';

const PORT = process.env.PORT || 3001;

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server at on port ${PORT}`));
