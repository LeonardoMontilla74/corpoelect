import { useContext } from 'react';
import UserContext from '../../context/Users/UserContext';
import AdminDashboard from '../../pages/AdminDashboard';
import PageNotFound from '../../pages/PageNotFound';

function PrivateRoute() {
  const { state } = useContext(UserContext);

  return (
    <main>
      {
        state.user.rol === 'admin'
          ? <AdminDashboard />
          : <PageNotFound />
      }
    </main>
  );
}

export default PrivateRoute;
