import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';
import { ChildrenProps, InitialState } from '../types';
import { User, MsgError } from '../../../backend/src/types';

function StoreProvider({ children }: ChildrenProps) {
  const navigate = useNavigate();

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

  async function getUser({ name, password }: User, route: string) {
    const result = await axios.post(`/${route}`, { name, password });
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

  function register({ name, password }: User) {
    getUser({ name, password }, 'register');
  }

  function login({ name, password }: User) {
    getUser({ name, password }, 'login');
  }

  async function getAllUsers(token: string) {
    const allUsers = await axios.get(
      '/admin/users',
      { headers: { token } },
    );
    setState({
      ...state,
      allUsers: allUsers.data,
    });
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{
      state, register, login, getAllUsers,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default StoreProvider;
