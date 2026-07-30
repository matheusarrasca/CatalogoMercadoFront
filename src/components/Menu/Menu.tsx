import { Link } from "react-router-dom";

function Menu(){
    return(
        <nav>
            <Link to="/">Home</Link>

      {" | "}

      <Link to="/produtos">Produtos</Link>

      {" | "}

      <Link to="/categorias">Categorias</Link>

      {" | "}

      <Link to="/dashboard">Dashboard</Link>

      {" | "}

        </nav>
    );
}

export default Menu;