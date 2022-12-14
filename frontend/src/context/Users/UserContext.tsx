import { createContext } from 'react';
import { InitialState, Context } from '../../types';

export const INITIAL_STATE: InitialState = {
  user: {
    name: '',
    password: '',
    rol: 'user',
    auth: false,
  },
  token: '',
  error: { msg: '' },
  allUsers: [],
};

const UserContext = createContext({} as Context);

export default UserContext;
