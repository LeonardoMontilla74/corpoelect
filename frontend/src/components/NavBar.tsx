import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientsContext from '../context/Clients/ClientsContext';
import UserContext from '../context/Users/UserContext';

function NavBar() {
  const { userState, cleanUsers } = useContext(UserContext);
  const { cleanClients } = useContext(ClientsContext);
  const { name, rol } = userState.user;
  const navigate = useNavigate();

  function closeSesion() {
    cleanClients();
    cleanUsers();
    navigate('/');
  }

  return (
    <nav className="navbar bg-light text-black rounded-2 m-2 p-2">
      <h3>{`Hola ${name}`}</h3>
      {rol === 'admin' && (
        <>
          <button
            type="button"
            onClick={() => navigate('/admin/users')}
            className="btn btn-primary"
          >
            Administrar usuarios
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/notifications')}
            className="btn btn-primary"
          >
            Ver notificaciones
          </button>
        </>
      )}
      <button
        type="button"
        onClick={closeSesion}
        className="btn btn-danger"
      >
        Cerrar sesión

      </button>
    </nav>
  );
}

export default NavBar;
