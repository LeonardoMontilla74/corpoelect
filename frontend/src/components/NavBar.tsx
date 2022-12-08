import { useContext } from 'react';
import UserContext from '../context/UserContext';

function NavBar() {
  const { state } = useContext(UserContext);
  const { name, rol } = state.userActive;

  return (
    <nav className="navbar m-2 p-2">
      <h3>{`Hola ${name}`}</h3>
      {rol === 'admin' && (
        <button
          type="button"
          className="btn btn-primary"
        >
          Administrar usuarios
        </button>
      )}
    </nav>
  );
}

export default NavBar;
