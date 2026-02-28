import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../supabaseClient';

const SignOutButton = () => {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      navigation.navigate('Login'); // Replace 'Login' with the actual name of your login screen
    }
  };

  return <Button title="Sign Out" onPress={handleSignOut} />;
};

export default SignOutButton;