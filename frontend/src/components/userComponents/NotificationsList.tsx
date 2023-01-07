import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientsContext from '../../context/Clients/ClientsContext';
import UserContext from '../../context/Users/UserContext';

function NotificationsList() {
  const { clientState, getAllNotifications } = useContext(ClientsContext);
  const { notifications } = clientState;

  const { userState } = useContext(UserContext);
  const { token } = userState;

  const navigate = useNavigate();

  useEffect(() => { getAllNotifications(token); }, []);

  return (
    <main className="container">
      <div className="row">
        {
          notifications?.length
            ? (
              notifications?.map((n) => (
                <div
                  key={n.idNotification}
                  className="col-sm-12 col-md-6 col-lg-3 border rounded-2 m-3 p-3 card bg-dark"
                >
                  <p>{`El cliente es: ${n.idClient}`}</p>
                  <p>{`El usuario es: ${n.idUser}`}</p>
                  <p>{`El tipo de reclamo es: ${n.type}`}</p>
                  <p>{`Descripción: ${n.desc}`}</p>
                  <p>{`Estado del reclamo: ${n.statusNotification}`}</p>
                  <button
                    type="button"
                    className="btn btn-warning m-2"
                  >
                    Cambiar estado
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger m-2"
                  >
                    Borrar
                  </button>
                </div>
              ))
            )
            : (
              <div className="m-4 spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )
        }
      </div>
      <button
        type="button"
        className="btn btn-primary m-4"
        onClick={() => navigate('/home')}
      >
        Regresar
      </button>
    </main>
  );
}

export default NotificationsList;
