import { useContext } from 'react';
import AdminDashboard from '../components/userComponents/AdminDashboard';
import NavBar from '../components/NavBar';
import UserDashboard from '../components/userComponents/UserDashboard';
import UserContext from '../context/Users/UserContext';

function Home() {
  const { state } = useContext(UserContext);
  const { rol } = state.user;

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="container mt-4">
        {
          rol === 'admin'
            ? <AdminDashboard />
            : <UserDashboard />
        }
      </main>
    </>
  );
}

export default Home;
