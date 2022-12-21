import { useContext } from 'react';
import NavBar from '../components/NavBar';
import PanelClient from '../components/Client/PanelClient';
import UserContext from '../context/Users/UserContext';
import PageNotFound from './PageNotFound';

function Home() {
  const { state } = useContext(UserContext);
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="container-fluid">
        {
          state.user
            ? <PanelClient />
            : <PageNotFound />
        }

      </main>
    </>
  );
}

export default Home;
