import axios, { AxiosResponse, AxiosError } from 'axios';

const BASE_URL = 'https://api.example.com';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

type ApiResponse<T> = {
    data: T;
};

type ApiError = {
    message: string;
};

export const ApiService = {
    get<T>(url: string): Promise<T> {
        return api
            .get<ApiResponse<T>>(url) // Updated type here
            .then((response: AxiosResponse<ApiResponse<T>>) => response.data.data)
            .catch((error: AxiosError<ApiError>) => {
                throw new Error(error.message);
            });
    },

    post<T>(url: string, data: any): Promise<T> {
        return api
            .post<ApiResponse<T>>(url, data) // Updated type here
            .then((response: AxiosResponse<ApiResponse<T>>) => response.data.data)
            .catch((error: AxiosError<ApiError>) => {
                throw new Error(error.message);
            });
    },
};