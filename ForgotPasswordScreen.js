import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { supabase } from '../utils/supabase'; // Ensure you adjust the import path as necessary

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');

    const handlePasswordReset = async () => {
        const { error } = await supabase.auth.api.resetPasswordForEmail(email);
        if (error) {
            Alert.alert('Error', error.message);
        } else {
            Alert.alert('Success', 'Check your email for the password reset link.');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Forgot Password?</Text>
            <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
            />
            <Button title="Reset Password" onPress={handlePasswordReset} />
        </View>
    );
};

export default ForgotPasswordScreen;