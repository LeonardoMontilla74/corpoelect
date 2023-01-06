import { useContext } from 'react';
import UserContext from '../../context/Users/UserContext';
import AdminDashboard from '../../pages/AdminDashboard';
import PageNotFound from '../../pages/PageNotFound';

function PrivateRoute() {
  const { userState } = useContext(UserContext);
  const { rol } = userState.user;

  return (
    <main>
      {
        rol === 'admin'
          ? <AdminDashboard />
          : <PageNotFound />
      }
    </main>
  );
}

export default PrivateRoute;
