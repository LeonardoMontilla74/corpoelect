import React, { useState, useContext, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../backend/src/types';
import UserContext from '../context/UserContext';

function Login() {
  const navigate = useNavigate();
  const { login, state } = useContext(UserContext);

  const [input, setInput] = useState<User>({
    name: '',
    password: '',
  });

  function loginUser(e: SyntheticEvent) {
    e.preventDefault();
    login(input);
    setInput({ name: '', password: '' });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h2 className="text-black">
                Bienvenido a la app de
              </h2>
              <h1 className="text-black">Corpoelect</h1>
              <hr />
              <form onSubmit={loginUser}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Usuario"
                    className="form-control"
                    value={input.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput({
                      ...input,
                      name: e.target.value,
                    })}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="form-control"
                    value={input.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput({
                      ...input,
                      password: e.target.value,
                    })}
                  />
                </div>
                <input
                  className="btn btn-primary btn-login text-uppercase fw-bold"
                  type="submit"
                  value="Iniciar sesión"
                />
              </form>
              {state.error && <p className="text-danger">{state.error.msg}</p>}
            </div>
            <h6 className="card-title text-black text-center mb-5 fw-bold fs-6">
              ¿No tienes cuenta?
              {' '}
              <button
                onClick={() => navigate('/register')}
                type="button"
                className="btn btn-link"
              >
                Regístrate
              </button>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
