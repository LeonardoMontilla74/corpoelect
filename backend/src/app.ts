import express from 'express';
import cors from 'cors';
import router from './routes';

const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true, limit: '80mb' }));
server.use(express.json({ limit: '80mb' }));
server.use(router);

export default server;
