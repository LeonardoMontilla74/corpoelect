import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import PrivateRoute from './components/userComponents/PrivateRoute';
import ClientDetails from './components/Client/ClientDetails';
import UserContext from './context/Users/UserContext';
import NotificationsDashboard from './components/Notifications/NotificationsDashboard';

function App() {
  const { checkLocalStorage } = useContext(UserContext);
  useEffect(() => { checkLocalStorage(); }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin/users" element={<PrivateRoute />} />
      <Route path="/admin/notifications" element={<NotificationsDashboard />} />
      <Route path="/details/:idClient" element={<ClientDetails />} />
    </Routes>
  );
}

export default App;
