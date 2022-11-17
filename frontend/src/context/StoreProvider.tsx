import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';
import { ChildrenProps, InitialState, User } from '../interfaces/User.interface';

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
    allUsers: [],
  };

  const [state, setState] = useState(initialState);

  async function register({ name, password }: User) {
    const result = await axios.post('/register', { name, password });
    setState({
      ...state,
      userActive: result.data,
    });
    navigate('/home');
  }

  async function login({ name, password }: User) {
    const result = await axios.post('/login', { name, password });
    setState({
      ...state,
      userActive: result.data.user,
      token: result.data.token,
    });
    navigate('/home');
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ state, register, login }}>
      {children}
    </UserContext.Provider>
  );
}

export default StoreProvider;
