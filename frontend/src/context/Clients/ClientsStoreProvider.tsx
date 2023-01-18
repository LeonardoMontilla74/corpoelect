import axios from 'axios';
import { useState } from 'react';
import ClientsContext, { CLIENTS_STATE } from './ClientsContext';
import { ChildrenProps } from '../../types';
import { NotificationModel } from '../../../../backend/src/types';

function ClientsStoreProvider({ children }: ChildrenProps) {
  const [clientState, setClientState] = useState(CLIENTS_STATE);

  async function getClient(token: string, param: string, value: string) {
    const result = await axios.post(
      '/clients',
      { param, value },
      { headers: { token } },
    );
    const client = result.data;
    const error = result.data;
    if (client?.length > 0) { setClientState({ client }); } else { setClientState({ error }); }
  }

  async function findClientById(token: string, idClient: number) {
    const result = await axios.post(
      '/clients/getById',
      { idClient },
      { headers: { token } },
    );
    if (result.data.msg) {
      const error = result.data;
      setClientState({ error });
    } else {
      const clientDetails = result.data;
      setClientState({ ...clientState, clientDetails });
    }
  }

  async function createNotification(token: string, notification: NotificationModel) {
    const result = await axios.post('notifications/create', { notification }, { headers: { token } });
    return result.data.msg;
  }

  async function getAllNotifications(token: string) {
    const result = await axios.get('/notifications', { headers: { token } });
    setClientState({ ...clientState, notifications: result.data });
  }

  async function updateNotification(token: string, idNotification: number, status: string) {
    const result = await axios.put(
      '/notifications/update',
      { idNotification, status },
      { headers: { token } },
    );
    setClientState({ ...clientState, error: result.data.msg });
    getAllNotifications(token);
  }

  async function deleteNotification(token: string, idNotification: number) {
    axios.delete(
      '/notifications/delete',
      {
        headers: { token },
        data: { idNotification },
      },
    );
    getAllNotifications(token);
  }

  function cleanClients() {
    setClientState(CLIENTS_STATE);
    localStorage.removeItem('localClient');
  }

  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ClientsContext.Provider value={{
      clientState,
      getClient,
      findClientById,
      cleanClients,
      createNotification,
      getAllNotifications,
      updateNotification,
      deleteNotification,
    }}
    >
      {children}
    </ClientsContext.Provider>
  );
}

export default ClientsStoreProvider;
