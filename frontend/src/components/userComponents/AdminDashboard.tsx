import { useContext } from 'react';
import UserContext from '../../context/Users/UserContext';

function AdminDashboard() {
  const { state } = useContext(UserContext);
  const { allUsers } = state;

  return (
    <div className="container">
      {
        allUsers?.map((u) => (
          <div
            className="container"
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
          </div>
        ))
      }
    </div>
  );
}

export default AdminDashboard;
