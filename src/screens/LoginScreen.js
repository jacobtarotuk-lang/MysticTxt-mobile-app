import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleLogin = async () => {
        // Assume authentication logic here
        const isAuthenticated = true; // Replace with actual auth logic
        const userRole = 'admin'; // Replace with fetched user role

        if (isAuthenticated) {
            // Navigate based on role
            if (userRole === 'admin') {
                navigation.navigate('AdminDashboard');
            } else {
                navigation.navigate('UserDashboard');
            }
        }
    };

    return (
        <View>
            <Text>Login Screen</Text>
            <Button title="Login" onPress={handleLogin} />
            <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
        </View>
    );
};

export default LoginScreen;