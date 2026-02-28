import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Signup Screen</Text>
            {/* Add your signup form here */}
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

export default SignupScreen;