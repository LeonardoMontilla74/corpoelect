import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import NavBar from '../NavBar';
import FormConsultNotif from './FormCosultNotif';
import NotificationsList from './NotificationsList';
import UserContext from '../../context/Users/UserContext';
import PageNotFound from '../../pages/PageNotFound';

function NotificationsDashboard() {
  const navigate = useNavigate();
  const { userState } = useContext(UserContext);
  const { rol } = userState.user;
  return (
    <main>
      {
        rol === 'admin'
          ? (
            <>
              <NavBar />
              <FormConsultNotif />
              <NotificationsList />
              <button
                type="button"
                className="btn btn-primary m-4"
                onClick={() => navigate('/home')}
              >
                Regresar
              </button>
            </>
          )
          : <PageNotFound />
      }
    </main>
  );
}

export default NotificationsDashboard;
