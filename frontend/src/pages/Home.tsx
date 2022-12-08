import { useContext } from 'react';
import AdminDashboard from '../components/AdminDashboard';
import NavBar from '../components/NavBar';
import UserDashboard from '../components/UserDashboard';
import UserContext from '../context/UserContext';

function Home() {
  const { state } = useContext(UserContext);
  const { userActive } = state;

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="container mt-4">
        {
          userActive.rol === 'admin'
            ? <AdminDashboard />
            : <UserDashboard />
        }
      </main>
    </>
  );
}

export default Home;
