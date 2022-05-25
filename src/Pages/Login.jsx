import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { useAppContext } from "../context";
import { atomCurrentUser } from "../store/atoms";
import { Button, Space } from "antd";
import "../login.css";
import { GoogleOutlined } from "@ant-design/icons";

const Login = () => {
  const navigateTo = useNavigate();
  const { signInGoogle } = useAppContext();

  // recoil: states
  const user = useRecoilValue(atomCurrentUser);

  // local: states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginFromGoogle = async () => {
    await signInGoogle();
  };

  useEffect(() => {
    if (Object.keys(user).length > 0) navigateTo("/");
  }, [user]);

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-from-title">Login</span>

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
              <button className="login-form-btn">Login</button>
            </div>

            <div className="container-login-form-btn">
              <Button
                type="primary"
                className="d-flex justify-content-center align-items-center bg-secondary border-0 rounded font-weight-bold"
                icon={<GoogleOutlined />}
                onClick={handleLoginFromGoogle}
              >
                Login com Google
              </Button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>

              <a
                className="txt2"
                to="SingUp"
                onClick={() => navigateTo("/cadastrar")}
              >
                Criar Conta.
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
