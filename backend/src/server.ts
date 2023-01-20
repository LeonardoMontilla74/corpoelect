import express, { Application } from 'express';
import cors from 'cors';
import router from './routes';
import Clients from './models/Clients';
import Notifications from './models/Notifications';

const server: Application = express();

server.use(cors());
server.use(express.urlencoded({ extended: true, limit: '80mb' }));
server.use(express.json({ limit: '80mb' }));
server.use(router);

Notifications.belongsToMany(Clients, { through: 'Client_Notification' });
Clients.belongsToMany(Notifications, { through: 'Client_Notification' });

export default server;
