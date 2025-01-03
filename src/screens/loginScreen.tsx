import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'test@gmail.com' && password === '120101') {
      Alert.alert('Login Success');
      navigation.reset({
        index:0, //gi reset ang navigation Stack
        routes: [{ name: 'Game Calculator' }], // Gina set lang na Home lang ang Only Route sa stack
      })
    } else {
      Alert.alert('Login Failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.gameTitle}>Game Calculator</Text>

      <View style={styles.loginForm}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    padding: 16,
    backgroundColor: '#fff',
  },
  gameTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginTop: 60, 
  },
  loginForm: {
    justifyContent: 'center',  
    flex: 1,                   
    marginBottom: 180,       
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default LoginScreen;
