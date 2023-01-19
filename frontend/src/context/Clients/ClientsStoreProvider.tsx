import axios from 'axios';
import { useState } from 'react';
import ClientsContext, { CLIENTS_STATE } from './ClientsContext';
import { ChildrenProps } from '../../types';

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
    }}
    >
      {children}
    </ClientsContext.Provider>
  );
}

export default ClientsStoreProvider;
