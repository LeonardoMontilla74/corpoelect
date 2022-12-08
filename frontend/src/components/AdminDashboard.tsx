import { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';

function AdminDashboard() {
  const { state, getAllUsers } = useContext(UserContext);
  const { token, allUsers } = state;

  useEffect(() => {
    getAllUsers(token);
  }, []);

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
