import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const handlePasswordReset = async () => {
        if (!email) {
            Alert.alert('Error', 'Please enter your email.');
            return;
        }
        // Mocked async function simulating reset password request
        const success = Math.random() > 0.5; // Replace with your actual API call here
        if (success) {
            Alert.alert('Success', 'Check your email for reset instructions');
            navigation.navigate('(auth)/login');
        } else {
            Alert.alert('Error', 'Failed to send reset email. Try again.');
        }
    };

    return (
        <View>
            <Text>Forgot Password</Text>
            <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                style={{ borderBottomWidth: 1, marginBottom: 20 }}
            />
            <Button title="Submit" onPress={handlePasswordReset} />
            <Button title="Back to Login" onPress={() => navigation.navigate('(auth)/login')} />
        </View>
    );
};

export default ForgotPasswordScreen;