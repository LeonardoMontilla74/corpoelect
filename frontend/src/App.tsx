import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import PrivateRoute from './components/userComponents/PrivateRoute';
import ClientDetails from './components/Client/ClientDetails';
import NotificationsList from './components/userComponents/NotificationsList';

function App() {
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
