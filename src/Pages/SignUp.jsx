import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "../cadastro.css";
import { useAppContext } from "../context";
import FirebaseAuth from "../firebase";

const firebase = new FirebaseAuth();

const SignUp = () => {
  const { isAuthenticated } = useAppContext();
  const navigateTo = useNavigate();

  const [name, setName] = useState("");

  // local: states
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-from-title">Cadastro</span>

            <div className="wrap-input">
              <div>
                <input
                  className={name !== "" ? "has-val input" : "input"}
                  value={name}
                  type="email"
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Nome"></span>
              </div>
            </div>

            <div className="wrap-input">
              <div>
                <input
                  className={surname !== "" ? "has-val input" : "input"}
                  value={surname}
                  type="email"
                  onChange={(e) => setSurname(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder="Sobrenome"
                ></span>
              </div>
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="password"></span>
            </div>

            <div className="container-login-form-btn">
              <button
                onClick={() =>
                  firebase.handleCreateAccount({
                    auth: firebase.appAuth,
                    email,
                    password,
                  })
                }
                className="login-form-btn"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
