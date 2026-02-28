import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigation = useNavigation();

    const handleSignup = () => {
        // Perform sign up logic here and handle roles
        if (!email || !password || !role) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        // Mock signup process
        Alert.alert('Success', 'User signed up!');

        // Navigate to LoginScreen
        navigation.navigate('LoginScreen');
    };

    return (
        <View>
            <Text>Signup</Text>
            <TextInput 
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput 
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <TextInput 
                placeholder="Role"
                value={role}
                onChangeText={text => setRole(text)}
            />
            <Button title="Sign Up" onPress={handleSignup} />
        </View>
    );
};

export default SignupScreen;