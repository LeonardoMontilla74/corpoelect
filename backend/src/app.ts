/* eslint-disable import/no-extraneous-dependencies */
import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes';
import Clients from './models/Clients';
import Notifications from './models/Notifications';
import Users from './models/Users';

const server: Application = express();

server.use(cors());
server.use(express.urlencoded({ extended: true, limit: '80mb' }));
server.use(express.json({ limit: '80mb' }));
server.use(morgan('dev'));
server.use(router);

Notifications.hasOne(Clients);
Notifications.hasOne(Users);

Clients.belongsTo(Notifications);

export default server;
