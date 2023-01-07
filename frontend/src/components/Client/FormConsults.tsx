import React, { SyntheticEvent, useContext, useState } from 'react';
import ClientsContext from '../../context/Clients/ClientsContext';

function FormConsults() {
  const { getClient } = useContext(ClientsContext);

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
    getClient(input.param, input.value);
  }

  return (
    <div className="container-fluid">
      <div className=" form-group">
        <div className="row">
          <div className="col-sm-7 col-md-5 col-lg-4 mx-auto">
            <form onSubmit={submitData}>
              <select
                className="form-select form-select-sm m-3"
                aria-label="Cambiar rol de usuario"
                onChange={(e) => handleParam(e)}
              >
                <option defaultValue="user">Consultar clientes por:</option>
                <option value="NOMBRE">Nombre</option>
                <option value="CONTRATO">Contrato</option>
                <option value="NIC">N.I.C</option>
                <option value="CUENTA_ANTIGUA">Cuenta antigua</option>
                <option value="DIRECCION">Dirección</option>
                <option value="OFICINA">Oficina</option>
                <option value="RUTA">Ruta</option>
              </select>
              <input
                type="text"
                className="m-3 form-control"
                placeholder="Escriba aquí el dato..."
                onChange={(e) => handleValue(e)}
              />
              <input
                className="btn btn-info btn-login text-uppercase fw-bold m-3 form-control"
                type="submit"
                value="Consultar"
                disabled={!!input.value}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormConsults;
