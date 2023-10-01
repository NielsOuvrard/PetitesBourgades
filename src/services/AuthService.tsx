import { ApiService } from './ApiService';

type AuthResponse = {
    status: string;
};

export const AuthService = {
    // Check if the user is authenticated
    async checkAuthentication(): Promise<boolean> {
        try {
            const response: AuthResponse = await ApiService.get('/auth/check');
            return response.status === 'connected';
        } catch (error) {
            // Handle the error, e.g., by logging it or showing an error message
            console.error('Authentication error:', error);
            return false;
        }
    },

    // Implement login and logout methods as needed
};