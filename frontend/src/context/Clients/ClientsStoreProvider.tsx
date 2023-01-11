import axios from 'axios';
import { useState } from 'react';
import ClientsContext, { CLIENTS_STATE } from './ClientsContext';
import { ChildrenProps } from '../../types';
import { NotificationModel } from '../../../../backend/src/types';

function ClientsStoreProvider({ children }: ChildrenProps) {
  const [clientState, setClientState] = useState(CLIENTS_STATE);

  async function getClient(param: string, value: string) {
    const result = await axios.post('/clients', { param, value });
    const client = result.data;
    const error = result.data;
    if (client?.length > 0) { setClientState({ client }); } else { setClientState({ error }); }
  }

  async function findClientById(idClient: number) {
    const result = await axios.post('/clients/getId', { idClient });
    const clientDetails = result.data;
    const error = result.data;
    if (clientDetails) {
      setClientState({ ...clientState, clientDetails });
    } else { setClientState({ error }); }
  }

  async function createNotification(notification: NotificationModel) {
    const result = await axios.post('clients/notifications/create', notification);
    return result.data.msg;
  }

  async function getAllNotifications(token: string) {
    const result = await axios.get('/clients/notifications', { headers: { token } });
    setClientState({ ...clientState, notifications: result.data });
  }

  function cleanClients() {
    setClientState(CLIENTS_STATE);
  }

  async function deleteNotification(token: string, idNotification: number) {
    axios.delete(
      '/clients/notifications/delete',
      { headers: { token, idNotification } },
    );
    getAllNotifications(token);
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
      deleteNotification,
    }}
    >
      {children}
    </ClientsContext.Provider>
  );
}

export default ClientsStoreProvider;
