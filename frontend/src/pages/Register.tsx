import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/Users/UserContext';

function Register() {
  const { register, cleanUsers, state } = useContext(UserContext);
  const { error } = state;

  useEffect(() => {
    cleanUsers();
  }, []);

  const [input, setInput] = useState({
    name: '',
    password: '',
  });

  async function registerUser(e: React.SyntheticEvent) {
    e.preventDefault();
    register(input);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-black text-center mb-5 fw-bold fs-4">Registrate</h5>
              <form onSubmit={registerUser}>
                <div className="form-group mb-3">
                  <p className="text-black">Escribe tu nombre y apellido</p>
                  <input
                    type="text"
                    placeholder="Nombre y apellido"
                    className="form-control"
                    autoFocus
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput({
                      ...input,
                      name: e.target.value,
                    })}
                  />
                </div>

                <div className="form-group mb-3">
                  <p className="text-black">Escribe una contraseña única pero facíl de recordar</p>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="form-control"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput({
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
              {error?.msg && (
                <div
                  className="alert alert-danger mt-2"
                  role="alert"
                >
                  {error.msg}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
