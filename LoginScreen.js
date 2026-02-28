import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const LoginScreen = () => {
    return (
        <TouchableOpacity>
            {/* other components */}
            <Text>Login</Text>
            <Text
                onPress={() => navigation.navigate('ForgotPasswordScreen')}
                style={{ color: 'blue' }}>
                Forgot Password?
            </Text>
        </TouchableOpacity>
    );
};

export default LoginScreen;