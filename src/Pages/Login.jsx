import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { useAppContext } from "../context";
import { atomCurrentUser } from "../store/atoms";

const Login = () => {
  const user = useRecoilValue(atomCurrentUser);
  const { signInGoogle } = useAppContext();
  const navigateTo = useNavigate();

  const handleLoginFromGoogle = async () => {
    await signInGoogle();
  };

  if (user) navigateTo("/");

  return <button onClick={handleLoginFromGoogle}>Logar com o Google</button>;
};

export default Login;
