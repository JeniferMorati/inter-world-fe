import { useNavigate } from "react-router-dom";
import Button from "./Components/Button";
import Card from "./Components/Card";

const Budgets = () => {
  const navigateTo = useNavigate();
  const onDashboardClick = () => {
    navigateTo("/");
  };

  return (
    <div>
      Orçamentos
      <br />
      <Card title="Titulo" description="descrição">
        <Button text="Ir para Home" action={onDashboardClick} />
      </Card>
      <button class="bg-purple-800 text-white p-2 rounded">
        Botão vanilla
      </button>
    </div>
  );
};

export default Budgets;
