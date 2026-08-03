import { useEffect, useState } from "react";
import { getCategorias } from "../../services/categoriaService";
import type { Categoria } from "../../types/Categoria";

function Categorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function carregarCategorias() {
            try {
                const response = await getCategorias();

                setCategorias(response.items);
            } catch (error) {
                console.error("Erro ao carregar categorias:", error);
            } finally {
                setCarregando(false);
            }
        }

        carregarCategorias();
    }, []);

    if (carregando) {
        return <p>Carregando categorias...</p>;
    }

    return (
        <div>
            <h1>Categorias</h1>

            {categorias.length === 0 ? (
                <p>Nenhuma categoria encontrada.</p>
            ) : (
                <ul>
                    {categorias.map((categoria) => (
                        <li key={categoria.id}>
                            {categoria.nome}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Categorias;

....