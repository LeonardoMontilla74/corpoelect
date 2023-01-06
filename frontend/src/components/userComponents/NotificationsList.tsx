import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { NotificationModel } from '../../../../backend/src/types';
import UserContext from '../../context/Users/UserContext';

function NotificationsList() {
  const { userState } = useContext(UserContext);
  const { token } = userState;
  const [notification, setNotification] = useState([] as NotificationModel[]);

  async function getAllNotifications() {
    const result = await axios.get('/clients/notifications', { headers: { token } });
    const allNotifications: NotificationModel[] = result.data;
    setNotification(allNotifications);
  }

  useEffect(() => { getAllNotifications(); }, []);

  return (
    <main>
      {
        notification?.map((n) => (
          <div key={n.idNotification}>
            <p>{`User ${n.idClient}`}</p>
          </div>
        ))
      }
    </main>
  );
}

export default NotificationsList;
