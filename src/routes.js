import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import {
  Home,
  Budgets,
} from './Pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/orcamentos" element={<Budgets />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
