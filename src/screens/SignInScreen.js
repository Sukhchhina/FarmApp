import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Auth } from 'aws-amplify';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await Auth.signIn(email, password);
      Alert.alert('Sign in successful!');
      // Navigate to the main app screen or home screen here
    } catch (error) {
      Alert.alert('Error signing in:', error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Sign In" onPress={signIn} />
      <Button title="Don't have an account? Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

export default SignInScreen;
