import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = () => {
    if (email === '' || password === '') {
      alert('Please fill out all fields');
    } else {
      alert('Login successful');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back you've been missed !</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={validateLogin} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Create new account</Text>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <AntDesign name="google" size={32} color="black" style={styles.icon} />
        <AntDesign name="facebook-square" size={32} color="black" style={styles.icon} />
        <AntDesign name="apple1" size={32} color="black" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f6fc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  link: {
    color: '#3366FF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3366FF',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  subtitle:{
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontStyle:'bold',
    marginBottom: 30,
  }
});
