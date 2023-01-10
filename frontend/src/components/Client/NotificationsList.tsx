import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ClientsContext from '../../context/Clients/ClientsContext';
import UserContext from '../../context/Users/UserContext';

function NotificationsList() {
  const { clientState, getAllNotifications, deleteNotification } = useContext(ClientsContext);
  const { notifications } = clientState;

  const { userState } = useContext(UserContext);
  const { token } = userState;

  const navigate = useNavigate();

  useEffect(() => {
    if (!notifications) {
      getAllNotifications(token);
    }
  }, []);

  function handleDelete(idNotification: number) {
    deleteNotification(token, idNotification);
  }

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
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`/details/${n.idClient}`}
                    className="text-white col-sm-10 col-md-7 col-lg-5 card border-2 shadow m-3 bg-dark"
                  >
                    <p>{`El cliente es: ${n.Clients?.[0].NOMBRE}`}</p>
                  </Link>

                  <p>{`Notificación creada por: ${n.userName}`}</p>
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
                    onClick={() => handleDelete(n.idNotification)}
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
