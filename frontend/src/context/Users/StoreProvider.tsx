import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext, { INITIAL_STATE } from './UserContext';
import { ChildrenProps, User, MsgError } from '../../types';

function StoreProvider({ children }: ChildrenProps) {
  const navigate = useNavigate();

  const [userState, setUserState] = useState(INITIAL_STATE);

  async function register({ name, password }: User) {
    const result = await axios.post('/users/register', { name, password });

    if (result.data.msg) {
      const { msg }: MsgError = result.data;
      setUserState({ ...userState, error: { msg } });
    } else {
      const user = result.data;
      setUserState({ ...userState, user });
      navigate('/home');
    }
  }

  async function login({ name, password }: User) {
    const result = await axios.post('users/login', { name, password });

    if (result.data.msg) {
      const { msg }: MsgError = result.data;
      setUserState({ ...userState, error: { msg } });
    } else {
      const user: User = result.data.userDB;
      const { token } = result.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(token));
      setUserState({ ...userState, user, token });
      navigate('/home');
    }
  }

  async function getAllUsers(token: string) {
    const allUsers = await axios.get(
      '/users',
      { headers: { token } },
    );

    setUserState({ ...userState, allUsers: allUsers.data });
  }

  async function updateUser(
    token: string,
    idUser: number,
    rol?: 'admin' | 'user',
    auth?: boolean,
  ) {
    await axios.put(
      '/users/update',
      { idUser, rol, auth },
      { headers: { token } },
    );
    getAllUsers(token);
  }

  async function deleteUser(token: string, idUser: number) {
    axios.delete(
      '/users/delete',
      {
        headers: { token },
        data: { idUser },
      },
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
