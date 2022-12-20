import NavBar from '../components/NavBar';
import PanelClient from '../components/Client/PanelClient';

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="container m-4">
        <PanelClient />
      </main>
    </>
  );
}

export default Home;
