import { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserDashboard() {
  const { state } = useContext(UserContext);
  const { userActive } = state;

  return (
    <div>
      {
        userActive.auth
          ? <p>El usuario está autenticado</p>
          : <p>Ahora ponte en contacto con el administrador del sitio</p>
      }
    </div>
  );
}

export default UserDashboard;
