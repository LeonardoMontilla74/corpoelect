import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import PrivateRoute from './components/userComponents/PrivateRoute';
import ClientDetails from './components/Client/ClientDetails';
import NotificationsList from './components/Client/NotificationsList';
import UserContext from './context/Users/UserContext';

function App() {
  const { checkLocalStorage } = useContext(UserContext);
  useEffect(() => { checkLocalStorage(); }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin/users" element={<PrivateRoute />} />
      <Route path="/admin/notifications" element={<NotificationsList />} />
      <Route path="/details/:idClient" element={<ClientDetails />} />
    </Routes>
  );
}

export default App;
