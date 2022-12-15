import { useContext, useEffect } from 'react';
import UserContext from '../../context/Users/UserContext';
import UserList from './UserList';

function AdminDashboard() {
  const { state, cleanUsers } = useContext(UserContext);
  const { allUsers } = state;

  useEffect(() => () => {
    cleanUsers();
  }, []);

  const userFilter = allUsers?.filter((u) => u.id !== state.user.id);

  return (
    <div className="container">
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
  );
}

export default AdminDashboard;
