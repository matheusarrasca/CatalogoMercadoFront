import api from "./Api";
import type { Categoria } from "../types/Categoria";
import type { PagedResult } from "../types/PagedResult";

export async function getCategorias(
    pageNumber = 1,
    pageSize = 10
): Promise<PagedResult<Categoria>> {

    const response = await api.get<PagedResult<Categoria>>(
        "/Categoria",
        {
            params: {
                pageNumber,
                pageSize
            }
        }
    );

    return response.data;
}

export async function excluirCategoria(id: number):Promise<void> {
    await api.delete(`/Categoria/${id}`);
}

export async function criarCategoria(categoria:Categoria):Promise<Categoria> {

    const response = await api.post<Categoria>(
        "/Categoria",
        categoria
    );
    return response.data;
}