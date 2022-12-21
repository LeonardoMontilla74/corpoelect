import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/Users/UserContext';
import UserList from '../components/userComponents/UserList';

function AdminDashboard() {
  const { state, getAllUsers } = useContext(UserContext);
  const { user, allUsers, token } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (user.rol === 'admin' && allUsers?.length === 0) getAllUsers(token);
  }, [allUsers]);

  const userFilter = allUsers?.filter((u) => u.id !== state.user.id);

  return (
    <section className="container-fluid">
      <div className="row">
        {
          userFilter?.length
            ? userFilter?.map((u) => (
              <UserList
                key={u.id}
                id={u.id}
                name={u.name}
                password={u.name}
                rol={u.rol}
                auth={u.auth}
              />
            ))
            : <h3 className="m-10">Cargando lista de usuarios...</h3>
        }
      </div>
      <button
        type="button"
        onClick={() => navigate('/home')}
        className="btn btn-primary mt-2"
      >
        Regresar
      </button>
    </section>
  );
}

export default AdminDashboard;
