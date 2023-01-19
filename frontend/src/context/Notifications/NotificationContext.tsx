import { createContext } from 'react';
import { NotifContext, NotificationState } from '../../types';

export const NOTIFICATION_STATE: NotificationState = {
  notification: {
    idNotification: 0,
    idClient: 0,
    userName: '',
    type: '',
    desc: '',
    statusNotification: '',
    createdAt: undefined,
    updatedAt: undefined,
    Clients: undefined,
  },
  allNotifications: [],
  error: { msg: '' },
};

const NotificationContext = createContext({} as NotifContext);

export default NotificationContext;
