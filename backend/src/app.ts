/* eslint-disable import/no-extraneous-dependencies */
import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes';

const server: Application = express();

server.use(cors());
server.use(express.urlencoded({ extended: true, limit: '80mb' }));
server.use(express.json({ limit: '80mb' }));
server.use(morgan('dev'));
server.use(router);

export default server;
