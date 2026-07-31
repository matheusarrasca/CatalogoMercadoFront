import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authServices";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await login({
                email,
                password
            });

            // Salva os dados de autenticação
            localStorage.setItem(
                "accessToken",
                response.accessToken
            );

            localStorage.setItem(
                "refreshToken",
                response.refreshToken
            );

            localStorage.setItem(
                "expiresAt",
                response.expiresAt
            );

            // Após o login, envia o usuário para o Dashboard
            navigate("/dashboard");

        } catch (error) {
            console.error("Erro ao realizar login:", error);
        }
    }

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>E-mail</label>
                    <br />

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <label>Senha</label>
                    <br />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <br />

                <button type="submit">
                    Entrar
                </button>

            </form>
        </div>
    );
}

export default Login;