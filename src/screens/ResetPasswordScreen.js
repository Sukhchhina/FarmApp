import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { confirmResetPassword } from 'aws-amplify/auth';

export default function ResetPasswordScreen({ route, navigation }) {
  const { username } = route.params;
  const [confirmationCode, setConfirmationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  function handlegotosign()
  {
    navigation.navigate('SignIn');
  }
  
  async function handleConfirmResetPassword() {
    try {
      await confirmResetPassword({
        username,
        confirmationCode,
        newPassword,
      });
      Alert.alert('Password reset successful!');
      navigation.navigate('SignIn'); // Navigate back to the SignIn screen
    } catch (error) {
      Alert.alert('Error resetting password:', error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter confirmation code"
        placeholderTextColor="#aaa"
        value={confirmationCode}
        onChangeText={setConfirmationCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        placeholderTextColor="#aaa"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <Button title="Reset Password" onPress={handleConfirmResetPassword} color="#4CAF50" />
      <Button title="Sign In" onPress={handlegotosign} color="#4CAF50" />
    
    
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
