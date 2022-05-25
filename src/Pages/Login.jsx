import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { useAppContext } from "../context";
import '../login.css'
import SignUp from './SignUp';

const Login = () => {
  //const navigate = useNavigate();
  /*const { setIsAuthenticated, setUser } = useAppContext();*/

  

 /* useEffect(() => {
    setUser({
      name,
      country,
    });
    navigate("/");
  }, []);*/

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  return(
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-from-title">Login</span>
            
            <div className="wrap-input">
               <input className={email !== ""  ? 'has-val input' : 'input'} value={email} type="email" onChange={e => setEmail(e.target.value)} />
               <span className="focus-input" data-placeholder="email"></span>
            </div>

            <div className="wrap-input">
               <input className={password !== ""  ? 'has-val input' : 'input'} value={password} type="password"  onChange={e => setPassword(e.target.value)} />
               <span className="focus-input" data-placeholder="password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>


            <div className="text-center">
              <span className="txt1">Não possui conta? </span>

              <a className="txt2" to="SingUp">Criar Conta.</a>
            </div>


          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
