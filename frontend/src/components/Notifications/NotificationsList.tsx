import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Table } from 'react-bootstrap';
import UserContext from '../../context/Users/UserContext';
import NotificationContext from '../../context/Notifications/NotificationContext';

function NotificationsList() {
  const {
    notificationState,
    deleteNotification,
    updateNotification,
  } = useContext(NotificationContext);

  const { allNotifications, error } = notificationState;
  const numberNotifications = allNotifications?.length;

  const { userState } = useContext(UserContext);
  const { token } = userState;

  function submitData(
    e: React.ChangeEvent<HTMLSelectElement>,
    idNotification: number,
  ) {
    updateNotification(token, idNotification, e.target.value);
    toast.success('Reclamo actualizado', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  function handleDelete(idNotification: number) {
    deleteNotification(token, idNotification);
    toast.error('Reclamo borrado con exito', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  return (
    <main>
      <div className="container-fluid">
        <div>
          {
            numberNotifications
              ? (
                <>
                  <h4 className="m-3 p-3">{`${numberNotifications} resultados`}</h4>
                  <Table
                    striped
                    bordered
                    hover
                    variant="dark"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Trabajador</th>
                        <th>Tipo de reclamo</th>
                        <th>Descripción</th>
                        <th>Estado:</th>
                        <th>Fecha:</th>
                        <th>Última actualización:</th>
                        <th className="text-warning">Actualizar estado:</th>
                        <th className="text-danger">Borrar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allNotifications?.map((n, index) => (
                          <tr
                            key={n.idNotification}
                          >
                            <td>{index + 1}</td>

                            <td>
                              <Link
                                style={{ textDecoration: 'none' }}
                                to={`/details/${n.idClient}`}
                                className="text-white"
                              >
                                {n.Clients?.[0].NOMBRE}
                              </Link>
                            </td>

                            <td>{n.userName}</td>

                            <td>{n.type}</td>

                            <td>{n.desc}</td>

                            <td>{n.statusNotification}</td>

                            <td>{n.createdAt?.slice(0, 10)}</td>

                            <td>{n.updatedAt?.slice(0, 10)}</td>

                            <td>
                              <select
                                className="form-select"
                                onChange={(e) => submitData(e, n.idNotification)}
                              >
                                <option defaultValue="Cambiar estado">Cambiar estado</option>
                                <option value="En proceso">En proceso</option>
                                <option value="Completada con exito">Completada con exito</option>
                                <option value="Rechazada">Rechazada</option>
                              </select>
                            </td>

                            <td>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => handleDelete(n.idNotification)}
                              >
                                Borrar
                              </button>

                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </Table>
                </>
              )
              : <h4 className="m-3 p-3 text-danger">{error?.msg}</h4>
          }
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default NotificationsList;
