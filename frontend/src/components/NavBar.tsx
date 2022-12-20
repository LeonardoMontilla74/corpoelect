import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/Users/UserContext';

function NavBar() {
  const { state, cleanUsers } = useContext(UserContext);
  const { name, rol } = state.user;
  const navigate = useNavigate();

  function closeSesion() {
    cleanUsers();
    navigate('/');
  }

  return (
    <nav className="navbar m-2 p-2">
      <h3>{`Hola ${name}`}</h3>
      {rol === 'admin' && (
        <button
          type="button"
          onClick={() => navigate('/admin/users')}
          className="btn btn-primary"
        >
          Administrar usuarios
        </button>
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
