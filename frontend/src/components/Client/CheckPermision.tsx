import { useContext } from 'react';
import UserContext from '../../context/Users/UserContext';
import ClientDashboard from './ClientDashboard';

function CheckPermision() {
  const { userState } = useContext(UserContext);
  const { auth } = userState.user;

  return (
    <main className="container">
      {
        auth
          ? <ClientDashboard />
          : <p>Ahora ponte en contacto con el Administrador del sitio</p>
      }
    </main>
  );
}

export default CheckPermision;
