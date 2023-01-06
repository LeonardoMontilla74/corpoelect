import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext, { INITIAL_STATE } from './UserContext';
import { ChildrenProps } from '../../types';
import { User, MsgError } from '../../../../backend/src/types';

function StoreProvider({ children }: ChildrenProps) {
  const navigate = useNavigate();

  const [userState, setUserState] = useState(INITIAL_STATE);

  async function register({ name, password }: User) {
    const result = await axios.post('/register', { name, password });
    const user: User = result.data.userDB;
    const error: MsgError = result.data.userDB;

    if (user.name) {
      setUserState({ ...userState, user });
      navigate('/home');
    } else {
      setUserState({ ...userState, error });
    }
  }

  async function login({ name, password }: User) {
    const result = await axios.post('login', { name, password });
    const user: User = result.data.userDB;
    const { token } = result.data;
    const error: MsgError = result.data.userDB;

    if (user.name) {
      setUserState({ ...userState, user, token });
      navigate('/home');
    } else {
      setUserState({ ...userState, error });
    }
  }

  async function getAllUsers(token: string) {
    const allUsers = await axios.get(
      '/admin/users',
      { headers: { token } },
    );

    setUserState({ ...userState, allUsers: allUsers.data });
  }

  async function updateUser(token: string, id: number, rol?: 'admin' | 'user', auth?: boolean) {
    await axios.put(
      'admin/users/update',
      { id, rol, auth },
      { headers: { token } },
    );
    getAllUsers(token);
  }

  async function deleteUser(token: string, id: number) {
    axios.delete(
      'admin/users/delete',
      { headers: { token, id } },
    );
    getAllUsers(token);
  }

  function cleanUsers() { setUserState(INITIAL_STATE); }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{
      userState, register, login, getAllUsers, updateUser, deleteUser, cleanUsers,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default StoreProvider;
