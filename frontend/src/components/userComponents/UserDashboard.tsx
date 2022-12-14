import { useContext } from 'react';
import UserContext from '../../context/Users/UserContext';

function UserDashboard() {
  const { state } = useContext(UserContext);
  const { auth } = state.user;

  return (
    <div>
      {
        auth
          ? <p>El usuario está autenticado</p>
          : <p>Ahora ponte en contacto con el administrador del sitio</p>
      }
    </div>
  );
}

export default UserDashboard;
