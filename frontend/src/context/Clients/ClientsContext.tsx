import { createContext } from 'react';
import { ClientContext, ClientsState } from '../../types';

export const CLIENTS_STATE: ClientsState = {
  client: [],
  clientDetails: undefined,
  error: { msg: '' },
};

const ClientsContext = createContext({} as ClientContext);

export default ClientsContext;
