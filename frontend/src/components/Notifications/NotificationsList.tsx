import React, { SyntheticEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import UserContext from '../../context/Users/UserContext';
import NotificationContext from '../../context/Notifications/NotificationContext';

function NotificationsList() {
  const {
    notificationState,
    deleteNotification,
    updateNotification,
    cleanNotifications,
  } = useContext(NotificationContext);

  const { allNotifications } = notificationState;

  const { userState } = useContext(UserContext);
  const { token } = userState;

  const [statusNotification, setStatusNotification] = useState('');

  function handleValue(e: React.ChangeEvent<HTMLSelectElement>) {
    setStatusNotification(e.target.value);
  }

  function submitData(e: SyntheticEvent, idNotification: number) {
    e.preventDefault();
    updateNotification(token, idNotification, statusNotification);
    setStatusNotification('');
    toast.success('Actualizada', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    cleanNotifications();
  }

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
      <div className="row justify-content-center">
        {
          allNotifications?.map((n) => (

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
                <form
                  className="d-flex"
                  onSubmit={(e) => submitData(e, n.idNotification)}
                >
                  <select
                    className="form-select me-2"
                    onChange={handleValue}
                  >
                    <option defaultValue="Cambiar estado">Cambiar estado</option>
                    <option value="En proceso">En proceso</option>
                    <option value="Completada con exito">Completada con exito</option>
                    <option value="Rechazada">Rechazada</option>
                  </select>
                  <input
                    className="btn btn-sm btn-outline-info"
                    type="submit"
                    value="Cambiar"
                    disabled={!statusNotification}
                  />
                </form>
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
        }
      </div>
      <ToastContainer />
    </main>
  );
}

export default NotificationsList;
