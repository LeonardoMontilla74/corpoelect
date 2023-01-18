import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UserContext from '../context/Users/UserContext';
import ClientsContext from '../context/Clients/ClientsContext';

function NavBar() {
  const { userState, cleanUsers } = useContext(UserContext);
  const { cleanClients } = useContext(ClientsContext);
  const { name, rol } = userState.user;
  const navigate = useNavigate();

  function closeSesion() {
    cleanClients();
    cleanUsers();
    navigate('/');
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="btn" onClick={() => navigate('/home')}>Corpoelect</Navbar.Brand>
        <Navbar.Brand>{`${name}`}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {rol === 'admin' && (
              <>
                <Nav.Link onClick={() => navigate('/admin/users')}>Usuarios</Nav.Link>
                <Nav.Link onClick={() => navigate('/admin/notifications')}>Notificaciones</Nav.Link>
              </>
            )}

            <button
              type="button"
              onClick={closeSesion}
              className="btn btn-danger"
            >
              Cerrar sesión
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
