import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext, { INITIAL_STATE } from './UserContext';
import { ChildrenProps } from '../../types';
import { User, MsgError } from '../../../../backend/src/types';

function StoreProvider({ children }: ChildrenProps) {
  const navigate = useNavigate();

  const [state, setState] = useState(INITIAL_STATE);

  async function register({ name, password }: User) {
    const result = await axios.post('/register', { name, password });
    const user: User = result.data.userDB;
    const error: MsgError = result.data.userDB;

    if (user.name) {
      setState({
        ...state,
        user,
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
    const result = await axios.post('login', { name, password });
    const user: User = result.data.userDB;
    const { token } = result.data;
    const error: MsgError = result.data.userDB;

    if (user.name) {
      setState({
        ...state,
        user,
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
