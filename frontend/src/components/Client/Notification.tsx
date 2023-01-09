import {
  ChangeEvent, SyntheticEvent, useContext, useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ClientsContext from '../../context/Clients/ClientsContext';
import UserContext from '../../context/Users/UserContext';

function Notification() {
  const { idClient } = useParams();
  const navigate = useNavigate();

  const { userState } = useContext(UserContext);
  const { user } = userState;

  const { createNotification } = useContext(ClientsContext);

  const [inputs, setInputs] = useState({ type: '', desc: '' });
  const [msg, setMsg] = useState('');

  function handleType(e: ChangeEvent<HTMLSelectElement>) {
    setInputs({ ...inputs, type: e.target.value });
  }

  function handleDesc(e: ChangeEvent<HTMLTextAreaElement>) {
    setInputs({ ...inputs, desc: e.target.value });
  }

  async function submitNotification(e: SyntheticEvent) {
    e.preventDefault();
    const notification = {
      idNotification: 0,
      idClient: Number(idClient),
      idUser: user.idUser,
      type: inputs.type,
      desc: inputs.desc,
      statusNotification: 'Pendiente por revisión',
    };
    const result = await createNotification(notification);
    setMsg(result);
    setInputs({ type: '', desc: '' });
    navigate('/home');
  }
  return (
    <div className="container-fluid">
      <h4>{msg}</h4>
      <div className="row">
        <div className="col-sm-7 col-md-5 col-lg-4 mx-auto">
          <form className=" form-group" onSubmit={submitNotification}>
            <select
              className="form-select m-2"
              aria-label="Cambiar rol de usuario"
              onChange={handleType}
            >
              <option defaultValue="Ilegal">Elija un reclamo...</option>
              <option value="Ilegal">Ilegal</option>
              <option value="Cambio de tarifa">Cambiar tarifa</option>
              <option value="Cambiar tipo de usuario">Cambiar tipo de usuario</option>
              <option value="Contador">Contador</option>
              <option value="Otro">Otro</option>
            </select>
            <textarea
              className="form-textarea m-1 rounded"
              name="description"
              placeholder="Escriba todos los datos necesarios..."
              cols={55}
              rows={5}
              value={inputs.desc}
              onChange={handleDesc}
            />
            <input
              type="submit"
              value="Enviar"
              className="btn btn-success"
              disabled={!inputs.type && !inputs.desc}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Notification;
