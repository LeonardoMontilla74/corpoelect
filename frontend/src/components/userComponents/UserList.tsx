import { useContext, useState } from 'react';
import { User } from '../../../../backend/src/types';
import UserContext from '../../context/Users/UserContext';

function UserList({
  idUser, name, rol, auth,
}: User) {
  const { userState, updateUser, deleteUser } = useContext(UserContext);
  const { token } = userState;
  const [alert, setAlert] = useState(false);
  const isActive = auth ? 'Activo' : 'Inactivo';
  const cargo = rol === 'admin' ? 'Administrador' : 'Usuario';

  function handleRol(e: React.ChangeEvent<HTMLSelectElement>) {
    const rolChange = e.target.value;
    updateUser(token, idUser as number, undefined, undefined, rolChange as 'admin' | 'user', true);
    setAlert(true);
    setInterval(() => {
      setAlert(false);
    }, 3000);
  }

  function handleAuth() {
    updateUser(token, idUser as number, undefined, undefined, undefined, !auth);
    setAlert(true);
    setInterval(() => {
      setAlert(false);
    }, 3000);
  }

  function handleDelete() {
    deleteUser(token, idUser as number);
    setAlert(true);
    setInterval(() => {
      setAlert(false);
    }, 3000);
  }

  return (
    <div
      className="col-sm-12 col-md-4 col-lg-3 border rounded-2 m-3 p-3 text-center"
      key={idUser}
    >
      <h4>
        {`Nombre: ${name}`}
      </h4>

      <div>
        <p>
          {`Cargo: ${cargo}`}
        </p>
        <select
          onChange={(e) => handleRol(e)}
          className="form-select form-select-sm"
          aria-label="Cambiar rol de usuario"
        >
          <option defaultValue="user">Elegir rol:</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select>
      </div>

      <hr />

      <div>
        Estado:
        <h5 className={auth ? 'text-success' : 'text-danger'}>{`${isActive}`}</h5>
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

      {
        alert && (
          <div className="alert alert-success" role="alert">
            Actualizado correctamente
          </div>
        )
      }

    </div>
  );
}

export default UserList;
