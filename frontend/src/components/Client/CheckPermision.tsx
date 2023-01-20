import { useContext } from 'react';
import UserContext from '../../context/Users/UserContext';
import ClientDashboard from './ClientDashboard';

function CheckPermision() {
  const { userState } = useContext(UserContext);
  const { auth, name } = userState.user;

  return (
    <main className="container-fluid">
      {
        auth
          ? <ClientDashboard />
          : <h4>{`Hola ${name}, ahora ponte en contacto con el Administrador del sitio`}</h4>
      }
    </main>
  );
}

export default CheckPermision;
