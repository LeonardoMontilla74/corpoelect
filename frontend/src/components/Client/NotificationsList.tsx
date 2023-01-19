import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ClientsContext from '../../context/Clients/ClientsContext';
import UserContext from '../../context/Users/UserContext';
import NavBar from '../NavBar';

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
    <>
      <NavBar />
      <main className="container">
        <div className="row justify-content-center">
          {
            notifications?.length
              ? (
                notifications?.map((n) => (

                  <Card
                    key={n.idNotification}
                    className="text-black text-center col-sm-10 col-md-4 col-lg-3 m-1"
                    style={{ minWidth: '22rem' }}
                  >
                    <Card.Body>
                      <Card.Title>{n.Clients?.[0].NOMBRE}</Card.Title>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/details/${n.idClient}`}
                      >
                        Ver detalles del cliente
                      </Link>
                      <Card.Body>
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            <strong>Creada por: </strong>
                            {n.userName}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <strong>Tipo de reclamo: </strong>
                            {n.type}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <strong>Descripción: </strong>
                            {n.desc}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <strong>Estado: </strong>
                            {n.statusNotification}
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
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
                    </Card.Body>
                  </Card>
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
    </>
  );
}

export default NotificationsList;
