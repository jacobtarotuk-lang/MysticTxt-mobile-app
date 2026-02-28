import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { login } from '../Auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { error } = await login(email, password);
      if (error) throw error;
      Alert.alert('Login Successful!');
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Login' onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;