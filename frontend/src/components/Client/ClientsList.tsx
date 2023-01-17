import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ClientsContext from '../../context/Clients/ClientsContext';

function ClientsList() {
  const { clientState } = useContext(ClientsContext);
  const { client } = clientState;
  const { error } = clientState;
  const numberClients = client?.length;

  function dowloadItems() {
    localStorage.setItem('localClient', JSON.stringify(client));
  }

  return (
    <div className="container-fluid">
      <div>{numberClients ? <h4>{`Se encontró ${numberClients}`}</h4> : null}</div>
      <div className="row">
        {
          client
            ? client?.map((c) => (
              <Link
                key={c.idClient}
                style={{ textDecoration: 'none' }}
                to={`/details/${c.idClient}`}
                className="text-white col-sm-10 col-md-7 col-lg-5 card border-2 shadow m-3 bg-dark"
              >
                <span>
                  Cliente:
                  {' '}
                  {c.NOMBRE}
                </span>
                <span>
                  Contrato:
                  {' '}
                  {c.CONTRATO}
                </span>
                <span>
                  Deuda:
                  {' '}
                  {c.DEUDA}
                </span>
                {
                  c.Notifications?.length
                    ? <p className="text-danger">Tiene una notificación pendiente</p>
                    : null
                }
              </Link>
            ))
            : <h4>{error?.msg}</h4>
        }
      </div>
      <div className="container">
        {client?.length ? (
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={dowloadItems}
          >
            Descargar
          </button>
        )
          : null}
      </div>
    </div>
  );
}

export default ClientsList;
