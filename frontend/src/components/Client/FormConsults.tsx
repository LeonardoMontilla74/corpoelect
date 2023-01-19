import React, { SyntheticEvent, useContext, useState } from 'react';
import ClientsContext from '../../context/Clients/ClientsContext';
import UserContext from '../../context/Users/UserContext';

function FormConsults() {
  const { getClient } = useContext(ClientsContext);
  const { userState } = useContext(UserContext);
  const { token } = userState;

  const [input, setInput] = useState({
    param: '',
    value: '',
  });

  function handleParam(e: React.ChangeEvent<HTMLSelectElement>) {
    setInput({
      ...input,
      param: e.target.value,
    });
  }

  function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInput({
      ...input,
      value: e.target.value,
    });
  }

  async function submitData(e: SyntheticEvent) {
    e.preventDefault();
    getClient(token, input.param, input.value);
  }

  return (
    <div className="container-fluid">
      <div className=" form-group">
        <div className="row justify-content-center">
          <div className="col-sm-7 col-md-5 col-lg-4 mx-auto">
            <form onSubmit={submitData}>
              <select
                className="form-select mb-3"
                aria-label="Cambiar rol de usuario"
                onChange={(e) => handleParam(e)}
              >
                <option defaultValue="NOMBRE">Consultar clientes por:</option>
                <option value="NOMBRE">Nombre</option>
                <option value="CONTRATO">Contrato</option>
                <option value="NIC">N.I.C</option>
                <option value="CUENTA_ANTIGUA">Cuenta antigua</option>
                <option value="DIRECCION">Dirección</option>
                <option value="OFICINA">Oficina</option>
                <option value="RUTA">Ruta</option>
              </select>
              <div className="d-flex" role="search">
                <input
                  onChange={(e) => handleValue(e)}
                  className="form-control me-2"
                  type="search"
                  placeholder="Escriba aquí el dato..."
                  aria-label="Buscar"
                />
                <input
                  className="btn btn-info"
                  type="submit"
                  value="Consultar"
                  disabled={!input.param}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormConsults;
