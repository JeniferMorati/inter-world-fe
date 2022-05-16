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
    </div>
  );
};

export default Budgets;
