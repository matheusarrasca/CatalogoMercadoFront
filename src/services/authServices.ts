import api from "./Api";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    expiresAt: string;
}

export async function login(
    data: LoginRequest
): Promise<LoginResponse> {

    const response = await api.post<LoginResponse>(
        "/Auth/login",
        data
    );

    return response.data;
}