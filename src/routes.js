import { Routes, Route } from "react-router-dom";

// pages
import { Home, Budgets, Login, About, Travel, Logout, SignUp } from "./Pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cadastrar" element={<SignUp />}></Route>
      <Route path="/orcamentos" element={<Budgets />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/destinos" element={<Travel />} />
      <Route path="/sair" element={<Logout />} />
    </Routes>
  );
};

export default AppRouter;
