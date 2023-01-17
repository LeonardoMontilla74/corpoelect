import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/Users/UserContext';
import UserList from '../components/userComponents/UserList';

function AdminDashboard() {
  const { userState, getAllUsers } = useContext(UserContext);
  const { rol, idUser } = userState.user;
  const { allUsers, token } = userState;
  const navigate = useNavigate();

  useEffect(() => {
    if (rol === 'admin' && allUsers?.length === 0) getAllUsers(token);
  }, [allUsers]);

  const userFilter = allUsers?.filter((u) => u.idUser !== idUser);

  return (
    <section className="container-fluid">
      <div className="row">
        {
          userFilter?.length
            ? userFilter?.map((u) => (
              <UserList
                key={u.idUser}
                idUser={u.idUser}
                name={u.name}
                password={u.name}
                rol={u.rol}
                auth={u.auth}
              />
            ))
            : (
              <div className="container">
                <div className="m-4 spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="text-danger">No hay usuarios para mostrar</p>
              </div>
            )
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
