import React, { SyntheticEvent, useContext, useState } from 'react';
import UserContext from '../../context/Users/UserContext';
import NotificationContext from '../../context/Notifications/NotificationContext';

function FormConsultNotif() {
  const { getNotification } = useContext(NotificationContext);
  const { userState } = useContext(UserContext);
  const { token } = userState;

  const [input, setInput] = useState({ value: '' });

  function handleValue(
    e: React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) {
    e.preventDefault();
    setInput({
      ...input,
      value: e.target.value,
    });
  }

  async function submitData(e: SyntheticEvent, param: string) {
    e.preventDefault();
    getNotification(token, param, input.value);
    setInput({ value: '' });
  }

  return (
    <>
      <div className="container text-center"><h4>Filtrar reclamos:</h4></div>
      <div className="row justify-content-center form-group">
        <div className="col-sm-10 col-md-5 col-lg-3 mx-auto">
          Por trabajador:
          <form onSubmit={(e) => submitData(e, 'userName')}>
            <div className="d-flex" role="search">
              <input
                onChange={(e) => handleValue(e)}
                className="form-control me-2"
                type="search"
                placeholder="Escriba el nombre..."
                value={input.value}
                aria-label="Buscar"
              />
              <input
                className="btn btn-sm btn-outline-info"
                type="submit"
                value="Consultar"
                disabled={!input.value}
              />
            </div>
          </form>
        </div>
        <div className="col-sm-10 col-md-5 col-lg-3 mx-auto">
          Por tipo de reclamo:
          <form
            className="d-flex"
            onSubmit={(e) => submitData(e, 'type')}
          >
            <select
              className="form-select me-2"
              onChange={(e) => handleValue(e)}
            >
              <option defaultValue="Ilegal">Elija un reclamo...</option>
              <option value="Ilegal">Ilegal</option>
              <option value="Cambio de tarifa">Cambiar tarifa</option>
              <option value="Cambiar tipo de usuario">Cambiar tipo de usuario</option>
              <option value="Contador">Contador</option>
              <option value="Otro">Otro</option>
            </select>
            <input
              className="btn btn-sm btn-outline-info"
              type="submit"
              value="Consultar"
              disabled={!input.value}
            />
          </form>
        </div>
        <div className="col-sm-10 col-md-5 col-lg-3 mx-auto">
          Por estado del reclamo:
          <form
            className="d-flex"
            onSubmit={(e) => submitData(e, 'statusNotification')}
          >
            <select
              className="form-select me-2"
              onChange={(e) => handleValue(e)}
            >
              <option value="Seleccionar">Seleccionar estado</option>
              <option value="Pendiente">Pendiente por revisión</option>
              <option value="En proceso">En proceso</option>
              <option value="Completada con exito">Completada con exito</option>
              <option value="Rechazada">Rechazada</option>
            </select>
            <input
              className="btn btn-sm btn-outline-info"
              type="submit"
              value="Consultar"
              disabled={!input.value}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default FormConsultNotif;
