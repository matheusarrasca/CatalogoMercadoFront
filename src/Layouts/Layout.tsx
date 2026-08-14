import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div>

      <header className="topo">

        <h2>Catálogo Mercado</h2>

        <nav>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/produtos">Produtos</Link>

          <Link to="/categorias">Categorias</Link>

          <Link to="/login">Sair</Link>

        </nav>

      </header>

      <main className="conteudo">
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;