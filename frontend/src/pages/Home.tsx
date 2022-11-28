import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Home() {
  const { state } = useContext(UserContext);
  console.log(state);

  return (
    <header>
      <h3>{`Hola ${state.userActive?.name}`}</h3>
      {
        state.userActive?.auth === false
          ? <p>Ahora ponte en contacto con el administrador del sitio</p>
          : <p>Bienvenido</p>
      }
    </header>
  );
}

export default Home;
