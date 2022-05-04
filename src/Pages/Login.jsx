import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../context";

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useAppContext();

  // TODO: fazer uma página de login real
  useEffect(() => {
    setUser({
      name: "Luke Skywalker",
      country: "ABY",
    });
    navigate("/");
  }, []);

  console.log('Olá mundo!');

  return <div>Página Login</div>;
};

export default Login;
