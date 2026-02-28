import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { supabase } from '../../lib/supabaseClient'; // Adjust the import path as necessary
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleSignup = async () => {
    setIsLoading(true);
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      // Upsert the profile into the profiles table
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({ id: user.id, email });

      if (profileError) {
        alert(profileError.message);
      } else {
        // Navigate to LoginScreen
        navigation.navigate('LoginScreen');
      }
    }
    setIsLoading(false);
  };

  return (
    <View>
      <Text>Signup</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        keyboardType='email-address'
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        secureTextEntry
      />
      <Button title='Sign Up' onPress={handleSignup} disabled={isLoading} />
    </View>
  );
};

export default SignupScreen;