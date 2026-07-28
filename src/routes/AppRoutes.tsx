import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Produtos from "../pages/Produtos/Produtos";
import Categorias from "../pages/Categorias/Categorias";
import DashBoard from "../pages/DashBoard/DashBoard";

function AppRoutes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;