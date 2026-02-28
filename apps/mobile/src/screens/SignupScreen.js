import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, Picker } from 'react-native';
import supabase from '../supabase';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    setIsLoading(true);
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      const { data, error: profileError } = await supabase
        .from('profiles')
        .insert([{ id: user.id, email, role }]);
      if (profileError) throw profileError;

      Alert.alert('Signup Successful!', 'You can now log in.');
    } catch (error) {
      Alert.alert('Signup Failed', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Text>Password:</Text>
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text>Role:</Text>
      <Picker selectedValue={role} onValueChange={(itemValue) => setRole(itemValue)}>
        <Picker.Item label="Client" value="client" />
        <Picker.Item label="Legacy/Advisor" value="legacy" />
      </Picker>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Sign Up" onPress={handleSignup} />
      )}
    </View>
  );
};

export default SignupScreen;