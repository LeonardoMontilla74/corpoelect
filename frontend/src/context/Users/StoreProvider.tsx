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
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(token));

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

  async function updateUser(token: string, idUser: number, rol?: 'admin' | 'user', auth?: boolean) {
    await axios.put(
      'admin/users/update',
      { idUser, rol, auth },
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

  function cleanUsers() {
    setUserState(INITIAL_STATE);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  function checkLocalStorage() {
    const isUser = localStorage.getItem('user');
    const hasToken = localStorage.getItem('token');
    if (isUser && hasToken) {
      const userLocal = JSON.parse(isUser);
      const tokenLocal = JSON.parse(hasToken);
      setUserState({ ...userState, user: userLocal, token: tokenLocal });
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{
      userState,
      register,
      login,
      getAllUsers,
      updateUser,
      deleteUser,
      cleanUsers,
      checkLocalStorage,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default StoreProvider;
