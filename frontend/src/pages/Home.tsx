import { useContext } from 'react';
import AdminDashboard from '../components/AdminDashboard';
import UserDashboard from '../components/UserDashboard';
import UserContext from '../context/UserContext';

function Home() {
  const { state } = useContext(UserContext);
  const { userActive } = state;

  return (
    <header>
      <h3>{`Hola ${userActive?.name}`}</h3>
      {
        userActive.rol === 'admin'
          ? <AdminDashboard />
          : <UserDashboard />
      }
    </header>
  );
}

export default Home;
