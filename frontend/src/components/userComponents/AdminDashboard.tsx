import { useContext } from 'react';
import UserContext from '../../context/Users/UserContext';

function AdminDashboard() {
  const { state, updateUser, deleteUser } = useContext(UserContext);
  const { token } = state;
  const { allUsers } = state;

  async function handleUpdate(id: number, auth: boolean) {
    await updateUser(token, id, 'user', auth);
    alert('Usuario actulizado');
  }

  async function handleDelete(id: number) {
    await deleteUser(token, id);
    alert('Usuario borrado');
  }

  return (
    <div className="container">
      {
        allUsers?.map((u) => (
          <div
            className="container border m-1 column"
            key={u.id}
          >
            <p>
              {`Id: ${u.id}`}
            </p>
            <p>
              {`Nombre: ${u.name}`}
            </p>
            <p>
              {`Rol: ${u.rol}`}
            </p>
            <p>
              {`Autenticado: ${u.auth}`}
            </p>
            <button
              type="button"
              onClick={() => handleUpdate(u.id as number, true)}
              className="btn btn-outline-primary"
            >
              Actualizar
            </button>
            <button
              type="button"
              onClick={() => handleDelete(u.id as number)}
              className="btn btn-outline-danger m-2"
            >
              Borrar
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default AdminDashboard;
