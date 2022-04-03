import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Home, Budgets, Login, About } from "./Pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/orcamentos" element={<Budgets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
