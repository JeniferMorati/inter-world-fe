import { MDBBtn, MDBContainer, MDBInputGroup } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../context";
import "../cadastro.css"

const SignUp = () => {
  const navigate = useNavigate();

  const { setIsAuthenticated, isAuthenticated, setUser, user } =
    useAppContext();

  const [name, setName] = useState("");
  /*const [country, setCountry] = useState("");*/

  // TODO: Fazer um requisição para API/BD enviando os dados e com base no retorno validar se cadastra ou não usuário
  useEffect(() => {
    setIsAuthenticated(false);
  }, []);

  const onRegisterUser = () => {
    setUser({
      name,
      country,
    });
    navigate("/");
  };

  if ((user && user.name) || isAuthenticated) return navigate("/");
;
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-from-title">Cadastro</span>

            <div className="wrap-input">
              <div>
                  <input className={name !== ""  ? 'has-val input' : 'input'} value={name} type="email" onChange={e => setName(e.target.value)} />
                  <span className="focus-input" data-placeholder="Nome"></span>
              </div>
            </div>

            <div className="wrap-input">
              <div>
                  <input className={surname !== ""  ? 'has-val input' : 'input'} value={surname} type="email" onChange={e => setSurname(e.target.value)} />
                  <span className="focus-input" data-placeholder="Sobrenome"></span>
              </div>
            </div>

            
            <div className="wrap-input">
               <input className={email !== ""  ? 'has-val input' : 'input'} value={email} type="email" onChange={e => setEmail(e.target.value)} />
               <span className="focus-input" data-placeholder="email"></span>
            </div>

            <div className="wrap-input">
               <input className={password !== ""  ? 'has-val input' : 'input'} value={password} type="password"  onChange={e => setPassword(e.target.value)} />
               <span className="focus-input" data-placeholder="password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Cadastrar</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
