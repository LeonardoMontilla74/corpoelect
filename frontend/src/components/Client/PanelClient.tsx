import { useContext } from 'react';
import UserContext from '../../context/Users/UserContext';

function PanelClient() {
  const { state } = useContext(UserContext);
  const { auth } = state.user;

  return (
    <div>
      {
        auth
          ? <div>Este es el panel de consultas</div>
          : <p>Ahora ponte en contacto con el Administrador del sitio</p>
      }
    </div>
  );
}

export default PanelClient;
