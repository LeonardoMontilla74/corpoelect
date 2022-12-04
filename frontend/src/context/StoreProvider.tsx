import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';
import { ChildrenProps, InitialState } from '../types';
import { User, MsgError } from '../../../backend/src/types';

function StoreProvider({ children }: ChildrenProps) {
  const initialState: InitialState = {
    userActive: {
      name: '',
      password: '',
      rol: 'user',
      auth: false,
    },
    token: '',
    error: { msg: '' },
    allUsers: [],
  };

  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  async function register({ name, password }: User) {
    const result = await axios.post('/register', { name, password });
    const user: User = result.data.userDB;
    const { token } = result.data;
    const error: MsgError = result.data.userDB;

    if (user.name) {
      setState({
        ...state,
        userActive: user,
        token,
      });
      navigate('/home');
    } else {
      setState({
        ...state,
        error,
      });
    }
  }

  async function login({ name, password }: User) {
    const result = await axios.post('/login', { name, password });
    const user: User = result.data.userDB;
    const { token } = result.data;
    const error: MsgError = result.data.userDB;

    if (user.name) {
      setState({
        ...state,
        userActive: user,
        token,
      });
    } else {
      setState({
        ...state,
        error,
      });
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ state, register, login }}>
      {children}
    </UserContext.Provider>
  );
}

export default StoreProvider;
