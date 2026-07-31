import { Link, useNavigate } from "react-router-dom";


function Menu() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("expiresAt");

        navigate("/login");
    }

    return (
        <nav>
            <Link to="/">Home</Link>
            {" | "}

            <Link to="/produtos">Produtos</Link>
            {" | "}

            <Link to="/categorias">Categorias</Link>
            {" | "}

            <Link to="/dashboard">Dashboard</Link>
            {" | "}

            <button onClick={handleLogout}>
                Sair
            </button>
        </nav>
    );
}

export default Menu;