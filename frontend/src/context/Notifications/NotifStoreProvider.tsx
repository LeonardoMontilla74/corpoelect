import axios from 'axios';
import { useState } from 'react';
import { ChildrenProps } from '../../types';
import { NotificationModel } from '../../../../backend/src/types';
import NotificationContext, { NOTIFICATION_STATE } from './NotificationContext';

function NotifStoreProvider({ children }: ChildrenProps) {
  const [notificationState, setNotificationState] = useState(NOTIFICATION_STATE);

  async function getNotification(token: string, param: string, value: string) {
    const result = await axios.post(
      '/notifications',
      { param, value },
      { headers: { token } },
    );
    const allNotifications = result.data;
    const error = result.data;
    if (allNotifications?.length > 0) {
      setNotificationState({ ...notificationState, allNotifications });
    } else { setNotificationState({ ...notificationState, error }); }
  }

  async function createNotification(token: string, notification: NotificationModel) {
    const result = await axios.post('notifications/create', { notification }, { headers: { token } });
    return result.data.msg;
  }

  async function updateNotification(
    token: string,
    idNotification: number,
    statusNotification: string,
  ) {
    const result = await axios.put(
      '/notifications/update',
      { idNotification, statusNotification },
      { headers: { token } },
    );
    setNotificationState({ ...notificationState, error: result.data.msg });
  }

  async function deleteNotification(token: string, idNotification: number) {
    axios.delete(
      '/notifications/delete',
      {
        headers: { token },
        data: { idNotification },
      },
    );
  }

  function cleanNotifications() {
    setNotificationState(NOTIFICATION_STATE);
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <NotificationContext.Provider value={{
      notificationState,
      createNotification,
      getNotification,
      updateNotification,
      deleteNotification,
      cleanNotifications,
    }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export default NotifStoreProvider;
