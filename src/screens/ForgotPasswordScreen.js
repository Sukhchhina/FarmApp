import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';
import { resetPassword } from 'aws-amplify/auth';

export default function ForgotPasswordScreen({ navigation }) {
  const [username, setUsername] = useState('');

  async function handleForgotPassword() {
    try {
      const output = await resetPassword({ username });
      //console.log(username);
      handleResetPasswordNextSteps(output);
    } catch (error) {
      Alert.alert('Error requesting password reset:', error.message);
    }
  }
 
  function goback()
  {
    navigation.navigate('SignIn');
  }

  function handleResetPasswordNextSteps(output) {
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
      case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        Alert.alert(`Confirmation code sent to ${codeDeliveryDetails.Destination}`);
        navigation.navigate('ResetPassword', { username }); // Navigate to ResetPasswordScreen
        break;
      case 'DONE':
        Alert.alert('Successfully reset password.');
        navigation.navigate('SignIn'); // Navigate back to SignInScreen if already done
        break;
      default:
        Alert.alert('Unexpected error.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Send Confirmation Code" onPress={handleForgotPassword} color="#4CAF50" />
      <Button title="Back" onPress={goback} color="#4CAF50" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#EAF8F5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFF',
    fontSize: 16,
    color: '#333',
  },
});
