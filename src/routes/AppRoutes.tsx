import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../Layouts/Layout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Produtos from "../pages/Produtos/Produtos";
import Categorias from "../pages/Categorias/Categorias";
import DashBoard from "../pages/DashBoard/DashBoard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página sem layout */}
        <Route path="/login" element={<Login />} />

        {/* Páginas com layout */}
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<DashBoard />} />

          <Route path="/produtos" element={<Produtos />} />

          <Route path="/categorias" element={<Categorias />} />

        </Route>

      {/* </Routes>
    </BrowserRouter> */}
  );
}

export default AppRoutes;