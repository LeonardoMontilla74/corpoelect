import { useContext } from 'react';
import UserContext from '../context/Users/UserContext';

function NavBar() {
  const { state, getAllUsers } = useContext(UserContext);
  const { name, rol } = state.user;
  const { token } = state;

  function getUsers() {
    getAllUsers(token);
  }

  return (
    <nav className="navbar m-2 p-2">
      <h3>{`Hola ${name}`}</h3>
      {rol === 'admin' && (
        <button
          type="button"
          onClick={getUsers}
          className="btn btn-primary"
        >
          Administrar usuarios
        </button>
      )}
    </nav>
  );
}

export default NavBar;
