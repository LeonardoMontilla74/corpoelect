import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import ClientsContext from '../../context/Clients/ClientsContext';
import UserContext from '../../context/Users/UserContext';

function NotificationsList() {
  const { clientState, getAllNotifications, deleteNotification } = useContext(ClientsContext);
  const { notifications } = clientState;

  const { userState } = useContext(UserContext);
  const { token } = userState;

  const navigate = useNavigate();

  useEffect(() => { getAllNotifications(token); }, []);

  function handleDelete(idNotification: number) {
    deleteNotification(token, idNotification);
    toast.error('Notificación borrada con exito', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
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
                  <div className="container">
                    {`Cliente: ${n.Clients?.[0].NOMBRE}`}
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={`/details/${n.idClient}`}
                      className="border rounded-2 m-3 p-3 card bg-dark"
                    >
                      Ver detalles del cliente
                    </Link>
                  </div>
                  <p>{`Creada por: ${n.userName}`}</p>
                  <p>{`Tipo de reclamo: ${n.type}`}</p>
                  <p>{`Descripción: ${n.desc}`}</p>
                  <p>{`Estado: ${n.statusNotification}`}</p>
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
              <div className="container">
                <div className="m-4 spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="text-danger">No hay notificaciones para mostrar...</p>
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
      <ToastContainer />
    </main>
  );
}

export default NotificationsList;
