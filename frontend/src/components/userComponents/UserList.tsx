import { useContext } from 'react';
import { User } from '../../../../backend/src/types';
import UserContext from '../../context/Users/UserContext';

function UserList({
  id, name, rol, auth,
}: User) {
  const { state, updateUser, deleteUser } = useContext(UserContext);
  const { token } = state;

  function handleRol(e: React.ChangeEvent<HTMLSelectElement>) {
    const rolChange = e.target.value;
    updateUser(token, id as number, rolChange as 'admin' | 'user', true);
  }

  function handleAuth() {
    updateUser(token, id as number, undefined, !auth);
  }

  function handleDelete() {
    deleteUser(token, id as number);
  }

  return (
    <div
      className="container border m-1 column"
      key={id}
    >
      <h4>
        {`Nombre: ${name}`}
      </h4>

      <div>
        <p>
          {`Rol: ${rol}`}
        </p>
        <select name="rol" onChange={(e) => handleRol(e)}>
          <option value="">Cambiar rol</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      <hr />

      <div>
        <p>
          {`Autenticado: ${auth}`}
        </p>
        <button
          type="button"
          onClick={handleAuth}
          className="btn btn-outline-primary m-2"
        >
          Cambiar
        </button>
      </div>

      <hr />

      <button
        type="button"
        onClick={handleDelete}
        className="btn btn-outline-danger m-2"
      >
        Borrar Usuario
      </button>
    </div>
  );
}

export default UserList;
