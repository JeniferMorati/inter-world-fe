import { useNavigate } from "react-router";
import Button from '../Components/Button';

const Exemplo = () => {
  const navigateTo = useNavigate();

  const goToHome = () => {
    navigateTo("/");
  };

  return (
    <div>
      Oi eu sou um exemplo!
      <Button text="Ir para home" action={goToHome} />
    </div>
  );
};

export default Exemplo;
