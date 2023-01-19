import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import PrivateRoute from './components/userComponents/PrivateRoute';
import ClientDetails from './components/Client/ClientDetails';
import NotificationsList from './components/Client/NotificationsList';
import UserContext from './context/Users/UserContext';
import ResponsiveExample from './components/Table';
import DarkExample from './components/Tablenegara';
import ClientsContext from './context/Clients/ClientsContext';

function App() {
  const { checkLocalStorage } = useContext(UserContext);
  const { clientState } = useContext(ClientsContext);
  useEffect(() => { checkLocalStorage(); console.log('App', clientState.client); }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin/users" element={<PrivateRoute />} />
      <Route path="/admin/notifications" element={<NotificationsList />} />
      <Route path="/details/:idClient" element={<ClientDetails />} />
      <Route path="/tab" element={<ResponsiveExample />} />
      <Route path="/tabn" element={<DarkExample />} />
    </Routes>
  );
}

export default App;
