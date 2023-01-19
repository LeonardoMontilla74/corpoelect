import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import ClientsContext from '../../context/Clients/ClientsContext';

function ClientsList() {
  const { clientState } = useContext(ClientsContext);
  const { client } = clientState;
  const { error } = clientState;
  const numberClients = client?.length;

  /*  function dowloadItems() {
    localStorage.setItem('localClient', JSON.stringify(client));
  } */

  return (
    <div className="container">
      <div>
        {
          numberClients
            ? (
              <>
                <h4 className="m-3 p-3">{`${numberClients} resultados`}</h4>
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
                      <th>Cédula o RIF</th>
                      <th>Contrato</th>
                      <th>Deuda</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      client?.map((c, index) => (
                        <tr
                          key={c.idClient}
                        >
                          <td>{index + 1}</td>
                          <td>
                            <Link
                              to={`/details/${c.idClient}`}
                              className="text-white"
                              style={{ textDecoration: 'none' }}
                            >
                              <td>
                                {c.NOMBRE}
                                {
                                  c.Notifications?.length
                                    ? <h6 className="text-danger">Tiene un reclamo pendiente</h6>
                                    : null
                                }
                              </td>
                            </Link>
                          </td>
                          <td>{c.DEVLOC}</td>
                          <td>{c.CONTRATO}</td>
                          <td>{c.DEUDA}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
                {/*  <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={dowloadItems}
                >
                  Descargar
                </button> */}
              </>
            )

            : <h4 className="m-3 p-3 text-danger">{error?.msg}</h4>
        }
      </div>
    </div>
  );
}

export default ClientsList;
