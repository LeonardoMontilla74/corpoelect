import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Register() {
  const navigate = useNavigate();
  const { register } = useContext(UserContext);

  const [input, setInput] = useState({
    name: '',
    password: '',
  });

  function registerUser() {
    register(input);
    navigate('/home');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-bold fs-4">Registrarse</h5>
              <form onSubmit={registerUser}>
                <div className="form-group mb-3">
                  <p>Escribe tu nombre y apellido</p>
                  <input
                    type="text"
                    placeholder="Usuario"
                    className="form-control"
                    onChange={(e) => setInput({
                      ...input,
                      name: e.target.value,
                    })}
                  />
                </div>

                <div className="form-group mb-3">
                  <p>Escribe una contraseña única pero facíl de recordar</p>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="form-control"
                    onChange={(e) => setInput({
                      ...input,
                      password: e.target.value,
                    })}
                  />
                </div>

                <input
                  className="btn btn-primary btn-login text-uppercase fw-bold"
                  type="submit"
                  value="Registrarse"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
