import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ButtonLogin from '@/components/buttons';
import * as Font from 'expo-font';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fontLoaded, setFontLoaded] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'zilla-slab-bold': require('@/assets/fonts/ZillaSlab-Bold.ttf'),
        'zilla-slab': require('@/assets/fonts/ZillaSlab-Regular.ttf'),
      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

  const handleLogin = () => {
    let valid = true;
    if (email === '') {
      setEmailError('Email is required');
      valid = false;
    } else if (!email.includes('@')) {
      setEmailError('Invalid email format');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('Password is required');
      valid = false;
    } else if (password !== '120101') {
      setPasswordError('Incorrect password');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      Alert.alert('Login Success');
      router.replace('/(tabs)/homeScreen'); 
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password clicked!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/kiosk.png')} style={styles.image} />
        <Text style={styles.gameTitle}>Game Calculator</Text>
      </View>

      <View style={styles.loginForm}>
        <View>
          <Text style={styles.title1}>Welcome Back!!</Text>
          <Text style={styles.title2}>Enter your Credentials to Login</Text>
        </View>

        <TextInput
          style={[styles.input, emailError ? styles.errorInput : null]} 
          placeholder="Enter your Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}

        <TextInput
          style={[styles.input, passwordError ? styles.errorInput : null]} 
          placeholder="Enter Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {passwordError ? <Text style={styles.errorMessage}>{passwordError}</Text> : null}

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <ButtonLogin title="Login" onPress={handleLogin} />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 135,
  },
  image: {
    width: 52,
    height: 45,
    marginRight: 8,
  },
  gameTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginForm: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 180,
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: 'zilla-slab-bold',
  },
  title2: {
    fontSize: 14,
    marginBottom: 25,
    fontFamily: 'zilla-slab',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
    color: '#000',
  },
  errorInput: {
    borderColor: 'red', 
  },
  forgotPassword: {
    fontSize: 14,
    color: '#007bff',
    marginBottom: 20,
    textAlign: 'right',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default LoginScreen;
