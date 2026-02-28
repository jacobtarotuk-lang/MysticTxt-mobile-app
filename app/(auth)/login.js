// Navigation for Forgot Password and Signup
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Login Screen</Text>
            <Button title='Forgot Password' onPress={() => navigation.navigate('(auth)/forgot-password')} />
            <Button title='Signup' onPress={() => navigation.navigate('(auth)/signup')} />
        </View>
    );
};

export default LoginScreen;