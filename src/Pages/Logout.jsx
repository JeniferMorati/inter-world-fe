import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../context";

const Logout = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAppContext();

  useEffect(() => {
    setIsAuthenticated(false);
    navigate("/");
  }, []);

  return <div>Página Lougout</div>;
};

export default Logout;
