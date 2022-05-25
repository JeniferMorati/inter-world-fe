import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../context";

const Logout = () => {
  const navigate = useNavigate();
  const { signOut } = useAppContext();

  useEffect(() => {
    signOut();
  }, []);

  return <div>Página Lougout</div>;
};

export default Logout;
