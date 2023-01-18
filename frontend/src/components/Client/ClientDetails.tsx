import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ClientsContext from '../../context/Clients/ClientsContext';
import Notification from './Notification';
import UserContext from '../../context/Users/UserContext';
import NavBar from '../NavBar';

function ClientDetails() {
  const { idClient } = useParams();
  const navigate = useNavigate();
  const { clientState, findClientById } = useContext(ClientsContext);
  const { error } = clientState;
  const { userState } = useContext(UserContext);
  const { token } = userState;

  useEffect(() => { findClientById(token, Number(idClient)); }, []);

  const c = clientState.clientDetails;

  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      <NavBar />
      <div className="container-full m-2 p-2">
        <h2 className="text-center">Detalles del cliente</h2>
        <div className="card bg-dark rounded-3 shadow border-3">
          <div className="card-body">
            {
              c
                ? (
                  <div className="row">
                    <div className="col-sm-10 col-md-6 col-lg-5">
                      <p>{`Nombre: ${c?.NOMBRE}`}</p>
                      <p>{`Telefono: ${c?.TLF}`}</p>
                      <p>{`Dirección: ${c?.DIRECCION}`}</p>
                      <p>{`N.I.C: ${c?.NIC}`}</p>
                      <p>{`Contrato: ${c?.CONTRATO}`}</p>
                      <p>{`Cuenta antigua: ${c?.CUENTA_ANTIGUA}`}</p>
                      <p>{`Fecha: ${c?.TARIFTYP_AB}`}</p>
                      <p>{`BAUFORM: ${c?.BAUFORM}`}</p>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-3">
                      <p>{`Deuda acumulada: ${c?.DEUDA}`}</p>
                      <p>{`Cantidad de facturas: ${c?.FACTURAS}`}</p>
                      <p>{`Tipo de cliente: ${c?.TIPO_CLIENTE}`}</p>
                      <p>{`Tipo de tarifa: ${c?.TIPO_TARIFA}`}</p>
                      <p>{`Tipo de usuario: ${c?.TIPO_USUARIO}`}</p>
                      <p>{`GPART: ${c?.GPART}`}</p>
                      <p>{`HAUS: ${c?.HAUS}`}</p>
                      <p>{`EQUNR: ${c?.EQUNR}`}</p>
                      <p>{`SERNR: ${c?.SERNR}`}</p>

                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-2">
                      <p>{`AOL: ${c?.AOL}`}</p>
                      <p>{`DEVLOC: ${c?.DEVLOC}`}</p>
                      <p>{`VKONTO: ${c?.VKONTO}`}</p>
                      <p>{`VERTRAG: ${c?.VERTRAG}`}</p>
                      <p>{`VSTELLE: ${c?.VSTELLE}`}</p>
                      <p>{`ANLAGE: ${c?.ANLAGE}`}</p>
                      <p>{`UND LECT: ${c?.UND_LECT}`}</p>
                      <p>{`AMP PRI: ${c?.AMP_PRI}`}</p>
                      <p>{`AMP SEC: ${c?.AMP_SEC}`}</p>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-2">
                      <p>{`VOL PRI: ${c?.VOL_PRI}`}</p>
                      <p>{`VOL SEC: ${c?.VOL_SEC}`}</p>
                      <p>{`HERST: ${c?.HERST}`}</p>
                      <p>{`Codigo postal: ${c?.CODIGO_POSTAL}`}</p>
                      <p>{`Ruta: ${c?.RUTA}`}</p>
                      <p>{`Oficina: ${c?.OFICINA}`}</p>
                    </div>
                  </div>
                )
                : (
                  <div className="m-4 spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )
            }
            {
              error?.msg && <p className="text-danger">{error.msg}</p>
            }
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={() => navigate('/home')}
        >
          Regresar
        </button>
        <button
          type="button"
          className="btn btn-warning m-1"
          onClick={() => setShowNotification(!showNotification)}
        >
          Crear reclamo
        </button>
        {
          showNotification && <Notification />
        }
      </div>
    </>
  );
}

export default ClientDetails;
