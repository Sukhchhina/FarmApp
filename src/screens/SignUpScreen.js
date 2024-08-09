import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
//import { Auth } from 'aws-amplify';
import { signUp } from 'aws-amplify/auth';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp({ name, password, email }) {
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
            name ,
          },
          // optional
          autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
        }
      });
  
      console.log(userId);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
  


  return (
    <View style={{ padding: 20 }}>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
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
      <Button title="Sign Up" onPress={() => handleSignUp({ name, email, password })} />

      <Button title="Already have an account? Sign In" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
};

export default SignUpScreen;
