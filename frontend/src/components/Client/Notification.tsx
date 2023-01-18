import {
  ChangeEvent, SyntheticEvent, useContext, useState, useEffect,
} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import ClientsContext from '../../context/Clients/ClientsContext';
import UserContext from '../../context/Users/UserContext';

function Notification() {
  const navigate = useNavigate();
  const { idClient } = useParams();

  const { userState } = useContext(UserContext);
  const { user } = userState;
  const { token } = userState;

  const { createNotification } = useContext(ClientsContext);

  const [inputs, setInputs] = useState({ type: '', desc: '' });
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (msg) {
      toast.success(`${msg}`, {
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
  }, [msg]);

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
      userName: user.name,
      type: inputs.type,
      desc: inputs.desc,
      statusNotification: 'Pendiente por revisión',
    };
    const result = await createNotification(token, notification);
    setMsg(result);
    setInputs({ type: '', desc: '' });
  }
  return (
    <>
      <Modal show fullscreen="below-sm-down" onHide={() => navigate('/home')}>
        <Modal.Header closeButton>
          <Modal.Title className="text-black">Detalles del reclamo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-black">
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
              className="form-textarea m-1 rounded col-sm-5 col-md-12 col-lg-12"
              name="description"
              placeholder="Escriba todos los datos necesarios..."
              cols={45}
              rows={5}
              value={inputs.desc}
              onChange={handleDesc}
            />
            <input
              type="submit"
              value="Enviar"
              className="btn btn-success"
              disabled={!inputs.type}
            />
          </form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Notification;
