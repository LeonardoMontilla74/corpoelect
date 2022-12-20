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
    <div className="container m-4">
      <div className="row">
        {
          userFilter?.map((u) => (
            <UserList
              key={u.id}
              id={u.id}
              name={u.name}
              password={u.name}
              rol={u.rol}
              auth={u.auth}
            />
          ))
        }
      </div>
      <button
        type="button"
        onClick={() => navigate('/home')}
        className="btn btn-primary mt-2"
      >
        Regresar
      </button>
    </div>
  );
}

export default AdminDashboard;
