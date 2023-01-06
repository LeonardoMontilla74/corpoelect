import { useContext } from 'react';
import NavBar from '../components/NavBar';
import UserContext from '../context/Users/UserContext';
import PageNotFound from './PageNotFound';
import CheckPermision from '../components/Client/CheckPermision';

function Home() {
  const { userState } = useContext(UserContext);
  const { user } = userState;
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="container-fluid">
        {
          user
            ? <CheckPermision />
            : <PageNotFound />
        }

      </main>
    </>
  );
}

export default Home;
