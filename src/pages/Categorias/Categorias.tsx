import { useEffect, useState } from "react";
import {
  getCategorias,
  excluirCategoria,
} from "../../services/categoriaService";

import type { Categoria } from "../../types/Categoria";

function Categorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [carregando, setCarregando] = useState(true);

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

  async function handleExcluir(id: number) {
    const confirmar = window.confirm(
      "Deseja realmente excluir esta categoria?",
    );

    if (!confirmar) return;

    try {
      await excluirCategoria(id);

      await carregarCategorias();
    } catch (error) {
      console.error(error);

      alert("Erro ao excluir categoria.");
    }
  }

  useEffect(() => {
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
        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th>Nome</th>

              <th>Imagem</th>

              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.nome}</td>

                <td>{categoria.imagemUrl}</td>

                <td>
                  <button>Editar</button>{" "}
                  <button onClick={() => handleExcluir(categoria.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Categorias;
.................