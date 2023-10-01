import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthService } from '../services/AuthService';

const MyComponent: React.FC = () => {
    const [authenticated, setAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        AuthService.checkAuthentication()
            .then((isAuthenticated) => {
                setAuthenticated(isAuthenticated);
            })
            .catch((error) => {
                console.error('Authentication error:', error);
                setAuthenticated(false);
            });
    }, []);

    const handleLogout = () => {
        // Implement logout functionality using AuthService.logout() if needed
    };

    return (
        <View>
            {authenticated === null ? (
                <Text>Loading...</Text>
            ) : authenticated ? (
                <View>
                    <Text>You are authenticated.</Text>
                    <Button title="Logout" onPress={handleLogout} />
                </View>
            ) : (
                <Text>You are not authenticated.</Text>
            )}
        </View>
    );
};

export default MyComponent;
