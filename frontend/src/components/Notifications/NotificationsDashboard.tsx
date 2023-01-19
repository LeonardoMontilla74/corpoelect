import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import FormConsultNotif from './FormCosultNotif';
import NotificationsList from './NotificationsList';

function NotificationsDashboard() {
  const navigate = useNavigate();
  return (
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
  );
}

export default NotificationsDashboard;
