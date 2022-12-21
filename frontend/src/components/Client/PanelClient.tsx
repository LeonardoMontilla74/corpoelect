import { useContext } from 'react';
import UserContext from '../../context/Users/UserContext';

function PanelClient() {
  const { state } = useContext(UserContext);
  const { auth } = state.user;

  return (
    <main className="container">
      {
        auth
          ? <div>Este es el panel de consultas</div>
          : <p>Ahora ponte en contacto con el Administrador del sitio</p>
      }
    </main>
  );
}

export default PanelClient;
